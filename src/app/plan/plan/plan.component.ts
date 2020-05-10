import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  mondayPlan = '';
  tuesdayPlan = '';
  wednesdayPlan = '';
  thursdayPlan = '';
  fridayPlan = '';
  saturdayPlan = '';
  sundayPlan = '';

  constructor() { }

  ngOnInit() {
    
  }
  

  values = '';

  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }

  // saveMonday(value: string) {
  //   this.mondayPlan += value + ' | ';
  // }

  // saveMonday(event: any){
  //   this.mondayPlan += event.target.value + ' | ';
  //   console.log("Saving Monday!")
  // }
  saveMonday(mondayPlan : string){
    this.mondayPlan = mondayPlan;
    console.log("Saving Monday!")
  }

  cancelMonday(){
    this.mondayPlan = '';
    console.log("Cancelling Monday!")
  }
  
  saveTuesday(tuesdayPlan : string){
    this.tuesdayPlan = tuesdayPlan;
    console.log("Saving Tuesday!")
  }

  cancelTuesday(){
    console.log("Cancelling Tuesday!")
  }

  saveWednesday(){
    console.log("Saving Wednesday!")
  }

  cancelWednesday(){
    console.log("Cancelling Wednesday!")
  }

  saveThursday(){
    console.log("Saving Thursday!")
  }

  cancelThursday(){
    console.log("Cancelling Thursday!")
  }

  saveFriday(){
    console.log("Saving Friday!")
  }

  cancelFriday(){
    console.log("Cancelling Friday!")
  }

  saveSaturday(){
    console.log("Saving Saturday!")
  }

  cancelSaturday(){
    console.log("Cancelling Saturday!")
  }

  saveSunday(){
    console.log("Saving Sunday!")
  }

  cancelSunday(){
    console.log("Cancelling Sunday!")
  }

}
