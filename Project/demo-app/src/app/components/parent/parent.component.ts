import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public messageForChild = 'greetings from the parent';
  public numberOfWords = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.messageForChild += ".";
    }, 1000);
  }

  public childMessage(event){
    this.numberOfWords = event;
  }

}
