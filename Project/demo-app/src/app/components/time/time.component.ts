import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }

  public today: number = Date.now();

  ngOnInit(): void {
    setInterval(() => {this.today = Date.now()}, 1);
  }

}
