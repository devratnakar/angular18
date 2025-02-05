import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexEx2Component } from './lex-ex2.component';

describe('LexEx2Component', () => {
  let component: LexEx2Component;
  let fixture: ComponentFixture<LexEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LexEx2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LexEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
