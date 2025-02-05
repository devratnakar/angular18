import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexEx1Component } from './lex-ex1.component';

describe('LexEx1Component', () => {
  let component: LexEx1Component;
  let fixture: ComponentFixture<LexEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LexEx1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LexEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
