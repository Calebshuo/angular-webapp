import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent,
  ImageSliderComponent
} from './component';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent
  ]
})
export class SharedModule {}
