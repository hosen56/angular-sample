import { Component, OnInit } from '@angular/core';
import {Course,MyCourse} from "../model/course";
import {Observable} from "rxjs/Observable";
// import {CoursesService} from "../services/cources.service";
 import {CoursesService} from "../services/cources-mock.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Course[];

    advancedCourses$: Course[];

    constructor(private coursesService: CoursesService) {

    }

  ngOnInit() {
    const courses$ = this.coursesService.findAllCourses();
    this.beginnerCourses$ = courses$;
    this.advancedCourses$ = courses$
  }

}
