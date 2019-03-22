import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwePageComponent } from './fwe-page.component';

describe('FwePageComponent', () => {
  let component: FwePageComponent;
  let fixture: ComponentFixture<FwePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
