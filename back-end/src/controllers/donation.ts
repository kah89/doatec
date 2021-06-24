import { Request, Response, Router } from "express";
import {validate} from "class-validator";
import { Donation, Status } from "../models/donation";
import { User } from "../models/user";
import { Computer } from "../models/computer";
import { verifyAdmin } from "../middlewares/user";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const userLogged: User = req['user'];

  const filter = {relations: ['computer', 'giver']};
  if (!userLogged.isAdmin) filter['where'] = {giver: {id: userLogged.id}};

  const donations = await Donation.find(filter);
  res.json(donations);
});

router.post('/', async (req: Request, res: Response) => {
  const userLogged: User = req['user'];

  const computer = new Computer();
  computer.title = req.body.computer.title;
  computer.description = req.body.computer.description;

  const computerValidationErrors = await validate(computer);
  if (computerValidationErrors.length > 0) {
    const errors = computerValidationErrors.map(error => {
      const description = Object.values(error.constraints);
      const field = error.property;

      return {[field]: description};
    });

    res.status(400).json(errors);
    return;
  }

  const donation = new Donation();
  donation.giver = userLogged;
  donation.computer = computer;
  donation.address = req.body.address;

  const donationValidationErrors = await validate(donation);
  if (donationValidationErrors.length > 0) {
    const errors = donationValidationErrors.map(error => {
      const description = Object.values(error.constraints);
      const field = error.property;

      return {[field]: description};
    });

    res.status(400).json(errors);
    return;
  }

  await computer.save();
  await donation.save();

  const response = {
    id: donation.id,
    computer: {
      title: donation.computer.title,
      description: donation.computer.description,
    },
    status: donation.status,
    collectionDate: null,
    address: donation.address,
  };
  res.status(201).json(response);
});

router.patch('/:id/address', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({error: 'Invalid ID type'})
    return;
  }

  const address: string = req.body.address;

  let donation: Donation;
  try {
    donation = await Donation.findOne(id);
  } catch(e) {
    res.status(404).json({error: 'Donation not found'});
    return;
  }

  if (donation.status >= Status.COLLECTED) {
    res.status(401).json({error: "Once collected, you can't change the donation address"});
    return;
  }

  donation.address = address;

  await donation.save();
  res.status(204).send();
});

router.patch('/:id/status', verifyAdmin, async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({error: 'Invalid ID type'})
    return;
  }

  const status: number = req.body.status;

  if (!Object.values(Status).includes(status)) {
    res.status(400).json({error: 'Invalid status type'});
    return;
  }

  let donation: Donation;
  try {
    donation = await Donation.findOne(id);
  } catch(e) {
    res.status(404).json({error: 'Donation not found'});
    return;
  }

  donation.status = status;
  if (status === Status.COLLECTED) donation.collectionDate = new Date();

  await donation.save();
  res.status(204).send();
});

export default router;
