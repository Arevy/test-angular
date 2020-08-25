import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoneComponent} from './done/done.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'done', component: DoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
