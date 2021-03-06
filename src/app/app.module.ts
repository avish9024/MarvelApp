import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {FeatureModule} from './feature/feature.module';
import {RouterModule, UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './shared/custom-url-serializer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
        FeatureModule,
        RouterModule,
        BrowserAnimationsModule
    ],
  providers: [{provide: UrlSerializer, useClass: CustomUrlSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
