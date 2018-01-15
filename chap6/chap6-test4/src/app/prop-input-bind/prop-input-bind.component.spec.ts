import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropInputBindComponent } from './prop-input-bind.component';

describe('PropInputBindComponent', () => {
  let component: PropInputBindComponent;
  let fixture: ComponentFixture<PropInputBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropInputBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropInputBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
