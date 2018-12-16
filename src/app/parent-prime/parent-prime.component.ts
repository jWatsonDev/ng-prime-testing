import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent-prime',
  templateUrl: './parent-prime.component.html',
  styleUrls: ['./parent-prime.component.css']
})
export class ParentPrimeComponent implements OnInit {
  public parentData: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.parentData = data;
        console.log(data);
      }, error => console.log(error));

  }

}
