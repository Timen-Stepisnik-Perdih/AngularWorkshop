import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { ParentComponent } from './components/parent/parent.component';
import { StreamComponent } from './components/stream/stream.component';
import { TextComponent } from './components/text/text.component';
import { TimeComponent } from './components/time/time.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'text', component: TextComponent },
  { path: 'time', component: TimeComponent },
  { path: 'input', component: InputComponent },
  { path: 'stream', component: StreamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
