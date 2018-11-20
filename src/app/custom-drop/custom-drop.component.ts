import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-drop',
  templateUrl: './custom-drop.component.html',
  styleUrls: ['./custom-drop.component.css']
})
export class CustomDropComponent implements OnInit {
  // https://stackoverflow.com/questions/37446644/how-can-i-set-the-default-sort-order-on-the-primeng-datatable
  @Input() showDropDown: boolean;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showCol = true;
  @Output() sortNotify: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(e): void {
    this.showDropDown = !this.showDropDown;
    e.stopPropagation();
  }

  hideColumn(e: Event): void {
    this.notify.emit(false);
    e.stopPropagation();
  }

  sortingBy(e: Event, sortBy: number): void {
    this.sortNotify.emit(sortBy);
    this.showDropDown = false;
    e.stopPropagation();
  }

}
