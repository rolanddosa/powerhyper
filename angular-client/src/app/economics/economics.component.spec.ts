import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Economics } from './economics.component';

describe('Economics', () => {
  let component: Economics;
  let fixture: ComponentFixture<Economics>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Economics ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Economics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
