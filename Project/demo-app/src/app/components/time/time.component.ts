import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(
    private commService: CommunicationService
  ) { }

  public today: number = Date.now();

  ngOnInit(): void {
    setInterval(() => {this.today = Date.now()}, 1);
  }

  public messageSidebar() {
    this.commService.sendMessage(true);
  }

}
