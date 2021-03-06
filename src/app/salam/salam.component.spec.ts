import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalamComponent } from './salam.component';

describe('SalamComponent', () => {
  let component: SalamComponent;
  let fixture: ComponentFixture<SalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
