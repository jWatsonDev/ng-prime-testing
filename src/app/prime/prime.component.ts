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
  sortOptions: any[];
  showMenu: boolean = false; 

 

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
    .subscribe(data => { 
        this._data = data;
        console.log(data);
    }, error => console.log(error));

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'title', header: 'title' },
      { field: 'body', header: 'body' }
    ];

    this.sortOptions = [
      {label: 'test1', value: 't1'},
      {label: 'test2', value: '!t1'},
      {label: 'test3', value: 't3'}
    ];
  }


}
