import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../components/box/box.component';

@NgModule({
  declarations: [
    BoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxComponent
  ]
})
export class BoxModule { }
