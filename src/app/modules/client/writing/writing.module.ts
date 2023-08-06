import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingComponent } from './writing.component';
import { Route, RouterModule } from '@angular/router';

const writingRoutes: Route[] = [
  {
    path: '',
    component: WritingComponent
  }
]


@NgModule({
  declarations: [WritingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(writingRoutes)
  ]
})
export class WritingModule { }
