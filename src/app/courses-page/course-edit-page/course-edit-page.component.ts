import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.dir("save invoked")
  }

  cancel() {
    console.dir("cancel invoked")
  }

}
