import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Resolve, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course-item/course';

import { FormArray, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
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
  error = '';
  editForm: FormGroup;
  checkboxValue: false;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.courseService.getCourse(id)
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
