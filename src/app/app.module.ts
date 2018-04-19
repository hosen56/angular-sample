import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule,MatSidenavModule,MatToolbarModule,
  MatDialogModule,MatSelectModule,MatInputModule,MatTableModule,
  MatSortModule,MatProgressSpinnerModule,MatPaginatorModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
//import {CoursesService} from "./services/cources.service";
import {CoursesService} from "./services/cources-mock.service";
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [CoursesService],
  entryComponents: [CourseDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
