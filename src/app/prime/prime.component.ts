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

  constructor(private _dataService: DataService) { }

  hideColumn(e) {
    console.log('Hiding...parent');
    //e.stopPropagation();
  }

  onNotify(hideCol: boolean, idx: number) {
    console.log('Parent component: event emitted. Hiding...');
    this.cols[idx].display = hideCol; 
  }

  ngOnInit() {
    this._dataService.getData()
    .subscribe(data => { 
        this._data = data;
        console.log(data);
    }, error => console.log(error));

    this.cols = [
      { field: 'id', header: 'id', display: true },
      { field: 'title', header: 'title', display: true },
      { field: 'body', header: 'body', display: true }
    ];
  }


}
