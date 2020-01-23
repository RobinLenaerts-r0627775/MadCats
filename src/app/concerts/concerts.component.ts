import { Component, OnInit } from '@angular/core';
import {Concert } from'../_models/Concert';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  concertList: Concert[] = [
    {date: new Date(Date.now()).toLocaleDateString('be-NL'), address: 'something street 25',
     description: 'this is a Concert at some place, its gonna be great yay!',
      pic: null},
     {date: new Date(Date.now()).toLocaleDateString('be-NL'), address: 'another street',
     description: 'this is a Concert at some other place, its gonna be awesome yay!', pic: null},
     {date: new Date(Date.now()).toLocaleDateString('be-NL'), address: 'yet another street',
     description: 'this is a Concert at some other place, its gonna be superb yay!', pic: null}];

  constructor() { }

  ngOnInit() {

  }

}
