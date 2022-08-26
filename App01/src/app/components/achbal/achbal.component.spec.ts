import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchbalComponent } from './achbal.component';

describe('AchbalComponent', () => {
  let component: AchbalComponent;
  let fixture: ComponentFixture<AchbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchbalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
