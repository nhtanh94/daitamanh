import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent implements OnInit {
  defaultTransform : any;
  slider:any;
  goNext() {
    this.defaultTransform = this.defaultTransform - 298;

    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.2) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 298;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  constructor() {}

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform = 0;
  }
}
