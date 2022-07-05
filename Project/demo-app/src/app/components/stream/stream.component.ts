import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StreamService } from 'src/app/services/stream.service';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit, OnDestroy {
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;

      this.targetX = this.getRandomInt(this.screenWidth);
      this.targetY = this.getRandomInt(this.screenHeight);

      console.log("Target set to:", this.targetX, this.targetY);
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  constructor(
    private streamService: StreamService
  ) { 
    this.onResize();
  }

    private screenHeight: number;
    private screenWidth: number;
    private targetX: number;
    private targetY: number;
    private streamSubscription: Subscription;

  ngOnInit(): void {
    // this.streamSubscription = this.streamService.getStream()
    // .pipe(
    //   //filter((light) => light === 'red' || light === 'yellow'),
    //   map((light) => this.extractCommand(light))
    // )
    // .subscribe(
    //   (light) => console.log('command:', light)
    // )

    fromEvent(document.body, 'mousemove')
    .pipe(

    ).subscribe( (e: MouseEvent) => { //npm install --save rxjs-compat   da bo delalo :)
      console.log(e.pageX, e.pageY);
    })
  }

  private extractCommand(light: string){
    if (light === 'red' || light === 'yellow')
      return 'stop';
    if (light === 'green')
      return 'drive';
    return 'unknown';
  }

  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe();
  }
}
