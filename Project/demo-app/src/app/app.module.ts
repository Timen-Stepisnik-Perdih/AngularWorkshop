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
import { MatExpansionModule } from '@angular/material/expansion';
import { ChildComponent } from './components/child/child.component';
import { InputComponent } from './components/input/input.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StreamComponent } from './components/stream/stream.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeComponent,
    ParentComponent,
    TextComponent,
    TextProcessPipe,
    ChildComponent,
    InputComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [TextProcessPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
