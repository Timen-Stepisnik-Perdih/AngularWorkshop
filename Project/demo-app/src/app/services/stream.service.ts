import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private stream$: Subject<string>;
  private values = ['red', 'green', 'yellow'];

  constructor() {
    this.stream$ = new Subject<string>();
    var ix = 0;
    setInterval( () => {
      this.stream$.next(this.values[ix])
      ix++;
      if (ix == 3)
        ix = 0;
    }, 1000);
   }


  public getStream(){
    return this.stream$;
  }
}
