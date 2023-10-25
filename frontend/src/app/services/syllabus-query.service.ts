import { Injectable } from '@angular/core';
import { SyllabusAnalysisService } from './syllabus-analysis.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SyllabusQueryService {

  constructor(private http: HttpClient) {}

  getData(item: string): Observable<any> {
    const url = `http://localhost:3000/courses?competency=${item}`;
    console.log(url);
    return this.http.get<[]>(url);
  }
}
