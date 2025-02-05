import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-structral-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structral-directive.component.html',
  styleUrl: './structral-directive.component.css'
})
export class StructralDirectiveComponent {

  div1Visible:boolean;
  div2Visible:boolean=true;
  selectedState=''
  num1=''
  num2=''
  stateList:string[]=['UttraPradesh','Bihar','JammuTawi','Kashmir','POK']
  studentList:any[]=[
    {
      name:"Ramesh",
      Marks:90,
      Gender:"Male"
    },
    {
      name:"Subrat",
      Marks:90,
      Gender:"Male"
    }
  ]
  constructor(){
    this.div1Visible=true;
  }

  showDiv1(){
    this.div1Visible=true;
  }
  hideDiv1(){
    this.div1Visible=false;
  }
  changeDiv2(){
    this.div2Visible=!this.div2Visible;
  }

}
