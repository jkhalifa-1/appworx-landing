import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat: number = 14.5787169802915;
  lng: number = 121.0642899802915;

  constructor() { }

  ngOnInit() {
  }

}
