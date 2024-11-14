import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonnahComponent } from './sonnah.component';

describe('SonnahComponent', () => {
  let component: SonnahComponent;
  let fixture: ComponentFixture<SonnahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonnahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SonnahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
