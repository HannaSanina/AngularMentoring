import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course';
import { BorderHighlightDirective } from '../border-highlight.directive';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() onDelete = new EventEmitter<Course>();
  @Output() onEdit = new EventEmitter<Course>();
  showDialog = false;

  constructor() { }

  ngOnInit() {
  }

  delete(course: Course) {
    this.onDelete.emit(course);
    this.showDialog = false;
  }

  edit(course: Course) {
    this.onEdit.emit(course);
  }

}
