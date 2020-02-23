import {Component, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {Student} from './student';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) {}

  students: Observable<Student[]>;

  studentList: any;

  ngOnInit() {    
    this.studentService.getStudentList().subscribe(data => {
      console.log(data)
      this.students = data;
    });

  }
}
