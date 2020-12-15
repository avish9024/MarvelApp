import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {InlineSVGModule} from 'ng-inline-svg';



@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    InlineSVGModule
  ]
})
export class SharedModule { }
