import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SyllabusAnalysisComponent } from './components/syllabus-analysis/syllabus-analysis.component';
import { SyllabusQueryComponent } from './components/syllabus-query/syllabus-query.component';
SyllabusQueryComponent


@NgModule({
  declarations: [
    AppComponent,
    SyllabusAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
