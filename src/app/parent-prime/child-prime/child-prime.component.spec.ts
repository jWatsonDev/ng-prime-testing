import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPrimeComponent } from './child-prime.component';

describe('ChildPrimeComponent', () => {
  let component: ChildPrimeComponent;
  let fixture: ComponentFixture<ChildPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
