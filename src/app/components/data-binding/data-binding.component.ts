import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  cName:String="Angular 18";
  inputType="checkbox";
  isIndian:boolean=true;
  currentDate:Date=new Date();
  style="bg-danger"
  typeI='radio';
  stateName='UP'

  FistName=signal("ratnkar Mishra")

  showAlert(message: string) {
    alert(message)
}

chnageCourse(){
  this.cName="RAtnakar"
}

changeSIgnal(){
  this.FistName.set("mishraji only")
}

}
