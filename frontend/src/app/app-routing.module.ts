import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusAnalysisComponent } from './components/syllabus-analysis/syllabus-analysis.component';
import { SyllabusQueryComponent } from './components/syllabus-query/syllabus-query.component';

const routes: Routes = [
  {
    path: '', component: SyllabusAnalysisComponent
  },
  {
    path: 'analysis', component: SyllabusAnalysisComponent
  },
  {
    path: 'query', component: SyllabusQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
