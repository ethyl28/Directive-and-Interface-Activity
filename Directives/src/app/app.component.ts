import { Component } from '@angular/core';
import {Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directive and Interface Activity';
  isAddStudent = false; //bolean type and implement is in every button so that it can be easily to switch the view of the page

  studentList:Student[]=[
    {
      id: 0,
      lastName:' Rolloque',
      firstName:'Rogina',
      age: 20,
      nationality: 'Filipino',
      gender:"Female",
      homeAddress:'Ponduhan, Boljoon, Cebu',
      status:'Single',
      educBack: 'Education Background',
      elemSchool: 'Manila elementary School',
      highSchool:'Manila National High School',
      // college: 'University of the Philippines',

    },

    {
      id:1,
      lastName:'Sotero',
      firstName: 'Ethyl',
      age: 21,
      nationality: 'Indian',
      gender: 'Female',
      homeAddress:'Mabinay, Negros Oriental',
      status: 'Single',
      educBack: 'Education Background',
      elemSchool: 'Mampalasan Elementary School',
      highSchool:'Bagtic National High School',
      college: 'San Carlos University',
      degree: 'on going pa'
    },

    {
      id:2,
      lastName:'Dalisay',
      firstName: 'Ricardo',
      age:30,
      nationality: 'American',
      gender: 'Male',
      homeAddress:'Manila',
      status: 'Married',
      educBack: 'Education Background',
      elemSchool: 'Manila elementary School',
      highSchool:'Manila National High School',
      college: 'University of the Philippines',
      degree: 'ninja'
    },
  ]

  addStudent(student: Student){
    // console.log(student);

    // add the value of student using array .push() method
    this.studentList.push(student);
    this.isAddStudent = false;
  }

  addNewStudent(){
    this.isAddStudent = true;
  }

}



// isDisabled = false;
//   inputValue = "";
//   numberValue = 10;

//   sampleClick() {
//     console.log(this.inputValue)

//   };

//   increaseValue(){
//     this.numberValue++
//     this.inputValue=this.numberValue.toString();
//   }

//   recieveEvent(){
//     console.log("test in app component");
//   }
