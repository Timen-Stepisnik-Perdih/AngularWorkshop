import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-app';

  constructor(
    private router: Router,
    private commService: CommunicationService
    ) { }

  public routeToPath(path: string){
    console.log(path);
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    const sidebar = document.getElementById('sidebar');

    this.commService.getMessage().subscribe((message : boolean) => {
      console.log("got message");
      sidebar.style.backgroundColor = 'red'
    });
  }
}
