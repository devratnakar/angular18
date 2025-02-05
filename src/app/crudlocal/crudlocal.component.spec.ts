import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudlocalComponent } from './crudlocal.component';

describe('CrudlocalComponent', () => {
  let component: CrudlocalComponent;
  let fixture: ComponentFixture<CrudlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudlocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
