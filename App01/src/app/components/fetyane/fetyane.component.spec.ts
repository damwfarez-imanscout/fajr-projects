import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetyaneComponent } from './fetyane.component';

describe('FetyaneComponent', () => {
  let component: FetyaneComponent;
  let fixture: ComponentFixture<FetyaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetyaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetyaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
