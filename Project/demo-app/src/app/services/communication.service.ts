import { Injectable } from '@angular/core';
import { observable, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private subjectName = new Subject<boolean>(); 

  sendMessage(message: boolean) { 
    this.subjectName.next(message);
  }

  getMessage(): Subject<boolean> { 
    return this.subjectName; 
  }

  constructor() { }
}
