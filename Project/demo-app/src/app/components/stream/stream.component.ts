import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit, OnDestroy {

  constructor(
    private streamService: StreamService
  ) { }

    private streamSubscription: Subscription;

  ngOnInit(): void {
    this.streamSubscription = this.streamService.getStream()
    .pipe(
      //filter((light) => light === 'red' || light === 'yellow'),
      map((light) => this.extractCommand(light))
    )
    .subscribe(
      (light) => console.log('command:', light)
    )
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
