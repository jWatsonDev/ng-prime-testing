import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeComponent } from './prime/prime.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {CardModule, Card} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http'; 
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import { BlahdirDirective } from './blahdir.directive';
import { CustomDropComponent } from './custom-drop/custom-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeComponent,
    BlahdirDirective,
    CustomDropComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    PanelModule,
    PaginatorModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
