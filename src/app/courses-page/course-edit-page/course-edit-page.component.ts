import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course-item/course';

import * as _ from 'underscore';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private route: ActivatedRoute,
    public courseService: CourseService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      p =>
        this.getCourse(p.has('id') && p.get('id')));
   // this.getCourse(+this.route.snapshot.paramMap.get('id'));
  }

  getCourse(id) {
    return this.courseService.getCourse(6521)
       .subscribe(res => {
        this.model = res[0];
      });
  }

  save() {
    this.courseService.updateCourse(this.model);
    this.router.navigate(['/']);
  }

  cancel() {
    this.location.back();
  }

}
