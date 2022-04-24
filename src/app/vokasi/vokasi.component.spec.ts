import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VokasiComponent } from './vokasi.component';

describe('VokasiComponent', () => {
  let component: VokasiComponent;
  let fixture: ComponentFixture<VokasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VokasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VokasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
