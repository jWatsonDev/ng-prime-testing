import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as jsPDF from 'jspdf';

declare var jsPDF: any;

@Component({
  selector: 'app-child-prime',
  templateUrl: './child-prime.component.html',
  styleUrls: ['./child-prime.component.css']
})

export class ChildPrimeComponent implements OnInit {
  @Input() public data: any[];
  public cols: any[];
  public selectedItems: any[];
  public sortField: string;
  public sortOrder: number;
  public selectedColumns: any[];
  public selectedItem: any; 

  constructor() { }

  onNotify(hideCol: boolean, idx: number) {
    this.cols[idx].display = hideCol;
  }

  onSortNotify(emission: number, sortBy: string) {
    this.sortOrder = emission;
    this.sortField = sortBy;
  }

  setSelectedItem(data) {
    this.selectedItem = data;
  }

  generatePdf() {
    let rows = [];
    let originalCols = [];
    let selectedCols = [];
    let colsToDisplay = [];
    let colsToDelete = [];

    for (let key of Object.keys(this.cols)) { originalCols.push(this.cols[key].field) }

    for (let key of Object.keys(this.selectedColumns)) {
      colsToDisplay.push(this.selectedColumns[key].header);
      selectedCols.push(this.selectedColumns[key].field);
    }

    for (let i = 0; i < originalCols.length; i++) {
      console.log(originalCols[i]);
      if (selectedCols.indexOf(originalCols[i]) === -1) {
        colsToDelete.push(originalCols[i]);
      }
    }

    for (let key of Object.keys(this.data)) {
      let tempRow = this.data[key];

      for (let i = 0; i < colsToDelete.length; i++) {
        if (this.data[key].hasOwnProperty(colsToDelete[i])) {
          delete tempRow[colsToDelete[i]];
        }
      }

      rows.push(this.jsonToArray(tempRow));
    }

    var doc = new jsPDF();
    doc.autoTable(colsToDisplay, rows, {
      margin: { top: 20, horizontal: 10, width: 20 },
      // columnStyles: {
      //   0: { columnWidth: 15 }, 1: { columnWidth: 15 }, 2: { columnWidth: 55 }, 3: { columnWidth: 100 }
      // }
    });
    doc.save('Test.pdf');
  }

  jsonToArray(json) {
    let result = [];
    let keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
    });
    return result;
  }

  ngOnInit() {

    this.cols = [
      { field: 'userId', header: 'User ID', display: true },
      { field: 'id', header: 'id', display: true },
      { field: 'title', header: 'title', display: true },
      { field: 'body', header: 'body', display: true }
    ];

    this.sortField = 'id';
    this.sortOrder = 1;
    this.selectedColumns = this.cols;
  }
}
