import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course';
import { BorderHighlightDirective } from '../border-highlight.directive';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() onDelete = new EventEmitter<Course>();
  showDialog = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete(course: Course) {
    this.onDelete.emit(course);
    this.showDialog = false;
  }

  goToEditPage(course) {
    this.router.navigate([`/courses/${course.id}`], { queryParams: { title: course.title } });
  }

}
