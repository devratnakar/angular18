import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EmployeeClass } from '../model/Employees';

@Component({
  selector: 'app-crudlocal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crudlocal.component.html',
  styleUrl: './crudlocal.component.css'
})
export class CrudlocalComponent {
  employeeForm: FormGroup = new FormGroup({});
  empObj: EmployeeClass = new EmployeeClass();
  employeeList: EmployeeClass[] = [];
  eData: any;
  constructor() {
    this.createForm();
    debugger
    const oldData = localStorage.getItem('EmpData');
    if (oldData != null) {
      const parsedData = JSON.parse(oldData);
      this.employeeList = parsedData;
    }

  }
  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.empObj.empId),
      name: new FormControl(this.empObj.name),
      city: new FormControl(this.empObj.city),
      pincode: new FormControl(this.empObj.pincode),
      state: new FormControl(this.empObj.state),
      address: new FormControl(this.empObj.address),
      contactNo: new FormControl(this.empObj.contactNo),
      email: new FormControl(this.empObj.email),
    })

  }
  onSave() {
    const oldData = localStorage.getItem('EmpData');
    debugger;
    if (oldData != null) {
      const parsedData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parsedData.length + 1);
      this.employeeList.unshift(this.employeeForm.value);
    }
    else {
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
  }
}
