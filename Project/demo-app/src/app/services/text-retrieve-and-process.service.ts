import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TextRetrieveAndProcessService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  public text: string = '';

  public getTextAndProcessPromise(): Promise<{}>{
    const promise = new Promise<{}>((resolve) => {
      this.httpClient.get<any>('https://api.publicapis.org/entries').subscribe(resp => {
        for (var entry of  resp['entries']) {
          this.text += ' ' + entry["Description"];
        }
        resolve(this.process(this.text));
      });
    });
    return promise;
  }

  public getTextAndProcessObservable(): Observable<{}>{
    const observable$ = new Observable((observer) => {
      this.httpClient.get<any>('https://api.publicapis.org/entries').subscribe(resp => {
        for (var entry of  resp['entries']) {
          this.text += ' ' + entry["Description"];
        }
        observer.next(this.process(this.text))
        setInterval(() => {
          this.text += " of";
          observer.next(this.process(this.text, true));
        }, 100);
      });
    });
    return observable$;
  }

  public getTextAndProcessSubject(): Subject<{}>{
    const subject$ = new Subject();
    this.httpClient.get<any>('https://api.publicapis.org/entries').subscribe(resp => {
      for (var entry of  resp['entries']) {
        this.text += ' ' + entry["Description"];
      }
      subject$.next(this.process(this.text))
    });

    setInterval(() => {
      this.text += " of";
      subject$.next(this.process(this.text, true));
    }, 1000);

    return subject$;
  }

  public process(text: string, fast=false){
    var dict = {};
    for (var word of text.split(' ')){
      if (! (word in dict)){
        dict[word] = 1;  
      }else{
        dict[word] += 1;
      }
      var k = 0;
      if(!fast)
        for (var i = 0; i< 1000000; i++)
          k++;
    }
    return dict;
  }
}
