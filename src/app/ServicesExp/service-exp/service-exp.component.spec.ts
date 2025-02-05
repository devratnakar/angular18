import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExpComponent } from './service-exp.component';

describe('ServiceExpComponent', () => {
  let component: ServiceExpComponent;
  let fixture: ComponentFixture<ServiceExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceExpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
