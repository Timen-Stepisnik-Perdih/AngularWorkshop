import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextProcessPipe } from 'src/app/pipes/text-process.pipe';
import { TextRetrieveAndProcessService } from 'src/app/services/text-retrieve-and-process.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private customPipe: TextProcessPipe,
    private service: TextRetrieveAndProcessService
  ) { }

  public text: string = '';
  public mostFrequentWords = [];

  ngOnInit(): void {
    var id = setInterval(() => {
      if (this.service.hasResult()){
        console.log("Got result from service");
        this.mostFrequentWords = this.getTop5(this.service.getResult());
        clearInterval(id);
      }
    }, 1000);
    //this.getText();
  }

  private getText(){
    this.httpClient.get<any>('https://api.publicapis.org/entries').subscribe(resp => {
      for (var entry of  resp['entries']) {
        this.text += ' ' + entry["Description"];
      }
      console.log(this.text);
    });
  }

  private pipeText(){
    this.text = this.customPipe.transform(this.text);
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
