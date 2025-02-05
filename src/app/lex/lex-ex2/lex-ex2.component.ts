import { Component } from '@angular/core';
import { LexEx1Component } from "../lex-ex1/lex-ex1.component";

@Component({
  selector: 'app-lex-ex2',
  standalone: true,
  imports: [LexEx1Component],
  templateUrl: './lex-ex2.component.html',
  styleUrl: './lex-ex2.component.css'
})
export class LexEx2Component {
  ram='kharayi'

}
