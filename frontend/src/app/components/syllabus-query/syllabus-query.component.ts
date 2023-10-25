import { Component, NgModule } from '@angular/core';
import { SyllabusQueryService } from 'src/app/services/syllabus-query.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { course } from 'src/app/models/course';
import { Router } from '@angular/router';


@Component({
  selector: 'app-syllabus-query',
  templateUrl: './syllabus-query.component.html',
  styleUrls: ['./syllabus-query.component.css']
})

export class SyllabusQueryComponent
{
  data: course[] = [];
  selectedItem?: string;

  constructor(private SyllabusQueryService: SyllabusQueryService) { };

  submitSelection(item: string)
  {
    console.log(item);

    this.SyllabusQueryService.getData(item).subscribe(data =>
    {
      console.log(data);
      this.data = data;
    });

  }

  ngOnInit(): void {
  }

}
