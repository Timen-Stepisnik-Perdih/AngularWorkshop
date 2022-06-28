import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextProcessPipe } from 'src/app/pipes/text-process.pipe';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private customPipe: TextProcessPipe
  ) { }

  public text: string = '';

  ngOnInit(): void {
    this.getText();
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

}
