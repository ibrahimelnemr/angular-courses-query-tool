import { Injectable } from '@angular/core';
import { SyllabusAnalysisService } from './syllabus-analysis.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// For express backend port is 3000
const PORT: number = 3000; 

// For django backend port is 8000
// const PORT: number = 8000; 

// For dotnet backend port is 7288
// const PORT: number = 7288;


@Injectable({
  providedIn: 'root'
})
export class SyllabusQueryService {

  constructor(private http: HttpClient) {}

  getData(item: string): Observable<any> {

    // for dotnet core
    // const url = `https://localhost:7288/api/Course?competency=${item}`;

    const url = `http://localhost:${PORT}/courses?competency=${item}`;
    console.log(url);
    return this.http.get<[]>(url);
  }
}
