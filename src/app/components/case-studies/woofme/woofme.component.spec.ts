import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoofmeComponent } from './woofme.component';

describe('WoofmeComponent', () => {
  let component: WoofmeComponent;
  let fixture: ComponentFixture<WoofmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoofmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoofmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
