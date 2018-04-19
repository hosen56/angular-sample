import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Course} from "../model/course";
import { Lesson } from '../model/lesson';
import {CoursesService} from "../services/cources-mock.service";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    course:Course;
    dataSource: Lesson[];
    displayedColumns= ["seqNo", "description", "duration"];

    constructor(private coursesService: CoursesService) { }

    ngOnInit() {
      let my:Course = {id:23,
                      description:'Angular Material Foundamental';
                      iconUrl: 'https://www.ashita-team.com/wp/wp-content/uploads/2017/04/31e0845bcdf24675a2442bb1eac239e5.jpg';
                      courseListIcon: 'string';
                      longDescription: 'string';
                      category:'BEGINNER';
                      lessonsCount:20;
            }
        this.course = my;
        this.dataSource = this.coursesService.findAllCourseLessons(1);
    }
}
