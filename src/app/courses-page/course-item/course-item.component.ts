import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() onDelete = new EventEmitter<Course>();
  showDialog = false;

  constructor() { }

  ngOnInit() {
  }

  delete(course: Course) {
   this.onDelete.emit(course);
   this.showDialog = false;
  }

}
