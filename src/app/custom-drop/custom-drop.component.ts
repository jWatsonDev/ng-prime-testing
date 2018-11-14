import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-drop',
  templateUrl: './custom-drop.component.html',
  styleUrls: ['./custom-drop.component.css']
})
export class CustomDropComponent implements OnInit {

  @Input() showDropDown: boolean = false; 

  @Input() showColumn: boolean = true; 

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }

  //
}
