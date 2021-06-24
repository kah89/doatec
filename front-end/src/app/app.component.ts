import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SingletonRouterService } from 'src/services/singletonRouter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  videos: any[];
  title = 'app';
  isShow: boolean;
  data = false;
  constructor(
    public dialog: MatDialog,
    private singletonService: SingletonRouterService,) {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.isShow = this.singletonService.getCredentials();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
