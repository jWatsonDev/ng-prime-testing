import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as jsPDF from 'jspdf'

declare var jsPDF: any;

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  public data: any[];
  public cols: any[];
  public selectedItems: any[];
  public sortField: string;
  public sortOrder: number;
  public selectedColumns: any[];

  constructor(public dataService: DataService) { }

  onNotify(hideCol: boolean, idx: number) {
    this.cols[idx].display = hideCol;
  }

  onSortNotify(emission: number, sortBy: string) {
    this.sortOrder = emission;
    this.sortField = sortBy;
  }

  // generatePdf() {
  //   var columns = ['UserId', 'Id', 'Title', 'Body'];
  //   let colSel = ['userId', 'title'];
  //   var rows = [];
  //   //this.updateSelectedItems(this.data, 'blah');
  //   for (let key of Object.keys(this.data)) {
  //     let tempRow = this.data[key];
  //     console.log(tempRow);
  //     if (this.data[key].hasOwnProperty('id')) {
  //       console.log('hmm');
  //       delete tempRow.id;
  //     }
  //     console.log(tempRow); 
  //     rows.push(this.jsonToArray(this.data[key]));
  //   }

  //   var doc = new jsPDF();
  //   doc.autoTable(columns, rows, {
  //     margin: { top: 20, horizontal: 10, width: 20 },
  //     columnStyles: {
  //       0: { columnWidth: 15 }, 1: { columnWidth: 15 }, 2: { columnWidth: 55 }, 3: { columnWidth: 100 }
  //     }
  //   });
  //   //doc.save('Test.pdf');
  // }

  generatePdf() {
    var columns = ['UserId', 'Id', 'Title', 'Body'];
    var rows = [];
    
    for (let key of Object.keys(this.data)) {
      rows.push(this.jsonToArray(this.data[key]));
    }

    var doc = new jsPDF();
    doc.autoTable(columns, rows, {
      margin: { top: 20, horizontal: 10, width: 20 },
      columnStyles: {
        0: { columnWidth: 15 }, 1: { columnWidth: 15 }, 2: { columnWidth: 55 }, 3: { columnWidth: 100 }
      }
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
    this.dataService.getData()
      .subscribe(data => {
        this.data = data;
        // console.log(data);
      }, error => console.log(error));

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
