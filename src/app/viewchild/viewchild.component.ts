import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {

  @ViewChild(Child1Component) child1!: Child1Component;
  nameFromChild1: string='';
 // constructor(private cdr:ChangeDetectorRef) { }
 ngOnInit() {
  
 }
//  ngAfterViewInit() {
 
//    //this.nameFromChild1 = this.child1?.name;
//    setInterval(()=>{
//     this.nameFromChild1=this.child1.name;
//     //this.cdr.detectChanges();
//    },1000);
//  }

// ngAfterViewInit() {
//   setInterval(()=>{
//     this.nameFromChild1=this.child1.name;
//   });
// }

}
