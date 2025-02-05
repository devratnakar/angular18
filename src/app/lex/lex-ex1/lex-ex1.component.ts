import { Component, Input } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-lex-ex1',
  standalone: true,
  imports: [ButtonDirective],
  // template:`<h2>we are comming from inline html{{usernam}}</h2>`,
  templateUrl:'./lex-ex1.component.html',
  styles:[`H2{color:red}`]
})
export class LexEx1Component {
@Input()
  usernam:string=''

}
