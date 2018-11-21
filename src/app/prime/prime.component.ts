import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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

 generatePdf() {
    var columns = ["ID", "name", "blah"];
    var rows = [];

    for (const key of Object.keys(this.data)) {
      rows.push(this.jsonToArray(this.data[key]));
    }
    console.log(rows);
    var doc = new jsPDF();
    doc.autoTable(columns, rows);
    doc.save('Test.pdf');
}

  jsonToArray(json){
    let result = [];
    let keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result.splice(1, result.length - 1);
  }

  printToPdf() {

    //let doc = new jsPDF();
    let col = ["Details", "Values", "dsflkjdfs"];
    let rows = [];
    console.log(JSON.stringify(this.data))
    // for(let key in this.data){
    //     let temp = [key, this.data[key]];
    //     rows.push(temp);
    // }
    for (const key of Object.keys(this.data)) {
      //console.log(this.data[key]);
      rows.push(this.data[key]);
    }
    console.log(rows);
    // doc.autoTable(col, rows);
    // doc.save('Test.pdf');
  }
  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = data;
        // console.log(data);

      }, error => console.log(error));

    this.cols = [
      { field: 'id', header: 'id', display: true },
      { field: 'title', header: 'title', display: true },
      { field: 'body', header: 'body', display: true }
    ];

    this.sortField = 'id';
    this.sortOrder = 1;
    this.selectedColumns = this.cols;
  }
}
