import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crowdfunding } from './crowdfunding.component';

describe('Crowdfunding', () => {
  let component: Crowdfunding;
  let fixture: ComponentFixture<Crowdfunding>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crowdfunding ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crowdfunding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
