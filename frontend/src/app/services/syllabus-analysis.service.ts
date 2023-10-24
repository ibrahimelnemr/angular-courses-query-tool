import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyllabusAnalysisService {
  private dataUrl = 'assets/data.json';

  constructor(private http:HttpClient) { }

  getSyllabusAnalysis(): Observable<any> {
    return this.http.get<[]>(this.dataUrl);
  }
}
