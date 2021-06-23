import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { frontedev } from '../../../environments/frontdev';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tpvUsers = environment.REST_USER;
  location = frontedev.location;
  contact = frontedev.contact;
  email = frontedev.email;

  constructor() { }

  ngOnInit(): void {
  }
}
