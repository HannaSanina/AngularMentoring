import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Resolve, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course-item/course';
import { AuthorService } from '../../services/author.service';


@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseNewComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  selectedAuthors: Array<any> = [];

  constructor(private authorService: AuthorService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    //  this.getAuthours();
  }

  save() {
    this.model.authors = this.selectedAuthors;
    this.courseService.addCourse(this.model);
    this.router.navigate(['/']);
  }

  cancel() {
    this.location.back();
  }

}
