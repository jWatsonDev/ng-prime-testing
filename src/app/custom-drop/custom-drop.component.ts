import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-drop',
  templateUrl: './custom-drop.component.html',
  styleUrls: ['./custom-drop.component.css']
})
export class CustomDropComponent implements OnInit {
  // https://stackoverflow.com/questions/37446644/how-can-i-set-the-default-sort-order-on-the-primeng-datatable
  @Input() showDropDown: boolean; 
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>(); // pass click to parent compoent
  @Input() showCol = true;
  @Output() sortNotify: EventEmitter<string> = new EventEmitter<string>(); // pass click to parent compoent

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(e): void {
    this.showDropDown = !this.showDropDown;
    e.stopPropagation();
  }

  hideColumn(e: Event) {
    this.notify.emit(false);
    e.stopPropagation();
  }

  sortingBy(e: Event, i: number, sort: string) {
    console.log('Child...sort by.');
  }

}
