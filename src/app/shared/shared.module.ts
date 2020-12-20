import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { EncodeUriPipe } from './pipe/encode-uri.pipe';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
    declarations: [HeaderComponent, FooterComponent, EncodeUriPipe],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    InlineSVGModule,
    RouterModule,
    MatTabsModule
  ]
})
export class SharedModule { }
