import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Ambition} from "./ambition.component";


describe('Ambition', () => {
  let component: Ambition;
  let fixture: ComponentFixture<Ambition>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ambition ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ambition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
