import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BaiiComponent } from './baii.component';

const baiiRoutes: Route[] = [
  {
    path:'',
    component: BaiiComponent
  }
]

@NgModule({
  declarations: [BaiiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(baiiRoutes)
  ]
})
export class BaiiModule { }
