import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectMultipleControlValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class TextRetrieveAndProcessService {

  constructor(
    private httpClient: HttpClient,
  ) {
    this.getTextAndProcess();
   }

  public text: string = '';
  private isProcessing = true;
  //private wordDictionary = new Map<string, number>;
  private wordDictionary = {}

  private getTextAndProcess(){
    this.httpClient.get<any>('https://api.publicapis.org/entries').subscribe(resp => {
      for (var entry of  resp['entries']) {
        this.text += ' ' + entry["Description"];
      }
      this.wordDictionary = this.process(this.text);
      this.isProcessing = false;
    });
  }

  public process(text: string){
    var dict = {};
    for (var word of text.split(' ')){
      // if (!this.wordDictionary.has(word)){
      //   this.wordDictionary.set(word, 1);  
      // }else{
      //   this.wordDictionary.set(word, this.wordDictionary.get(word) +1 ); 
      // }
      if (! (word in dict)){
        dict[word] = 1;  
      }else{
        dict[word] += 1;
      }
      var k = 0;
      for (var i = 0; i< 1000000; i++)
        k++;
    }

    console.log(dict);
    return dict;
  }

  public hasResult(){
    return !this.isProcessing;
  }

  public getResult(){
    return this.wordDictionary;
  }
}
