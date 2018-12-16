import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPrimeComponent } from './parent-prime.component';

describe('ParentPrimeComponent', () => {
  let component: ParentPrimeComponent;
  let fixture: ComponentFixture<ParentPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
