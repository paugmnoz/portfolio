import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeloComponent } from './leelo.component';

describe('LeeloComponent', () => {
  let component: LeeloComponent;
  let fixture: ComponentFixture<LeeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
