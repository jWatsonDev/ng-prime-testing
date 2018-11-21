import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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
