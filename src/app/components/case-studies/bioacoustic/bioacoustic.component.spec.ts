import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioacousticComponent } from './bioacoustic.component';

describe('BioacousticComponent', () => {
  let component: BioacousticComponent;
  let fixture: ComponentFixture<BioacousticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioacousticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioacousticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
