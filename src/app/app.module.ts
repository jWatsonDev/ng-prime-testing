import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { PrimeComponent } from "./prime/prime.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccordionModule } from "primeng/accordion";
import { CardModule, Card } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { HttpClientModule } from "@angular/common/http";
import { PaginatorModule } from "primeng/paginator";
import { TableModule } from "primeng/table";
import { CustomDropComponent } from "./custom-drop/custom-drop.component";
import { CommonModule } from "@angular/common";
import { MultiSelectModule } from "primeng/primeng";
import { FieldsetModule } from "primeng/fieldset";
import { ParentPrimeComponent } from './parent-prime/parent-prime.component';
import { ChildPrimeComponent } from './parent-prime/child-prime/child-prime.component';

@NgModule({
  declarations: [AppComponent, PrimeComponent, CustomDropComponent, ParentPrimeComponent, ChildPrimeComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    PanelModule,
    PaginatorModule,
    TableModule,
    MultiSelectModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
