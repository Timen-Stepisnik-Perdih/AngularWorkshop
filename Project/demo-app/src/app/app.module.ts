import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimeComponent } from './components/time/time.component';
import { ParentComponent } from './components/parent/parent.component';
import { TextComponent } from './components/text/text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TextProcessPipe } from './pipes/text-process.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeComponent,
    ParentComponent,
    TextComponent,
    TextProcessPipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [TextProcessPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
