import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoutakademComponent } from './moutakadem.component';

describe('MoutakademComponent', () => {
  let component: MoutakademComponent;
  let fixture: ComponentFixture<MoutakademComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoutakademComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoutakademComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
