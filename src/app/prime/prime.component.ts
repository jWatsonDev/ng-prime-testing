import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  public _data: any[];
  public cols: any[];
  public _sortField: string;
  public _sortOrder: number;
  public selectedColumns: any[];

  constructor(public _dataService: DataService) { }

  onNotify(hideCol: boolean, idx: number) {
    this.cols[idx].display = hideCol;
  }

  onSortNotify(emission: number, sortBy: string) {
    this._sortOrder = emission;
    this._sortField = sortBy;
  }

  ngOnInit() {
    this._dataService.getData()
    .subscribe(data => {
        this._data = data;
        // console.log(data);
    }, error => console.log(error));

    this.cols = [
      { field: 'id', header: 'id', display: true },
      { field: 'title', header: 'title', display: true },
      { field: 'body', header: 'body', display: true }
    ];

    this._sortField = 'id';
    this._sortOrder = 1;
    this.selectedColumns = this.cols;
  }


}
