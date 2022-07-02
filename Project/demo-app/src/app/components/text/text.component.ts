import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextProcessPipe } from 'src/app/pipes/text-process.pipe';
import { TextRetrieveAndProcessService } from 'src/app/services/text-retrieve-and-process.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnDestroy {

  @Output() newTextEvent = new EventEmitter<number>();

  constructor(
    private httpClient: HttpClient,
    private customPipe: TextProcessPipe,
    private service: TextRetrieveAndProcessService
  ) { }



  public text: string = '';
  public mostFrequentWords = [];
  private subscription: Subscription;

  ngOnInit(): void {
    // this.service.getTextAndProcessPromise().then((value => {
    //   console.log(value)
    //   this.mostFrequentWords = this.getTop5(value);
    // })).catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log("Promise completed");
    // });

    this.subscription = this.service.getTextAndProcessObservable().subscribe(value => {
      console.log(value);
      this.mostFrequentWords = this.getTop5(value);
      this.newTextEvent.emit(this.sumDictionary(value));
    }, error => {
      console.log(error);
    }, () => {
      console.log("Subscription completed");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private pipeText(){
    this.text = this.customPipe.transform(this.text);
  }

  private sumDictionary(dict): number {
    var sum: number = 0;
    for (var key in dict){
      sum += dict[key];
    }
    return sum;
  }

  private getTop5(dict){
    // Create items array
    var items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    return items.slice(0, 5);
  }
}
