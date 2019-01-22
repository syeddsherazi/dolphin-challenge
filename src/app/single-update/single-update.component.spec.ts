import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUpdateComponent } from './single-update.component';

describe('SingleUpdateComponent', () => {
  let component: SingleUpdateComponent;
  let fixture: ComponentFixture<SingleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
