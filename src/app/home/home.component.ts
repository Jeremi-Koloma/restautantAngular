import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Property Binding
  imgHamburger = "../../assets/images/hamburger.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
