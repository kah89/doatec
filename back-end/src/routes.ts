import { Router } from "express";
import { verifyAuth } from "./middlewares/user";
import userController from "./controllers/user";
import donationController from "./controllers/donation"
import messageController from "./controllers/message"


const router = Router();

router.use('/users', userController);

router.use(verifyAuth);
router.use('/messages', messageController);
router.use('/donations', donationController);

export default router;
