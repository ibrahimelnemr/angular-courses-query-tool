import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SyllabusAnalysisComponent } from './components/syllabus-analysis/syllabus-analysis.component';
import { SyllabusQueryComponent } from './components/syllabus-query/syllabus-query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    SyllabusAnalysisComponent,
    SyllabusQueryComponent,
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
