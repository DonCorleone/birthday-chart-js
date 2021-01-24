import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaypieComponent } from './birthdaypie.component';

describe('BirthdaypieComponent', () => {
  let component: BirthdaypieComponent;
  let fixture: ComponentFixture<BirthdaypieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdaypieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaypieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
