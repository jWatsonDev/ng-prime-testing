import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  private _data: any[];
  cols: any[];
  private _sortField: string;
  private _sortOrder: number;

  constructor(private _dataService: DataService) { }

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
  }


}
