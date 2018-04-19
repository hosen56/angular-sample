

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course,MyCourse} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";



@Injectable()
export class CoursesService {

    constructor() { }
    findAllCourses(): Course[] {
        let my:Course = {id:23,
                        description:'Angular Material Foundamental';
                        iconUrl: 'https://www.ashita-team.com/wp/wp-content/uploads/2017/04/31e0845bcdf24675a2442bb1eac239e5.jpg';
                        courseListIcon: 'string';
                        longDescription: 'string';
                        category:'BEGINNER';
                        lessonsCount:20;
              }
        return [my,my]
    }

    findAllCourseLessons(courseId:number): Lesson[] {
        let my:Lesson = {id: 1,
                        description:'Since the table optimizes f, removed, or moved on the data array, you can trigger an update to the tables rendered rows by calling its renderRow',
                        duration: 'duration',
                        seqNo: 1,
                        courseId: 23}
        return [my,my,my,my,my,my,my,my,my,my,my,my,my,my]
    }


}
