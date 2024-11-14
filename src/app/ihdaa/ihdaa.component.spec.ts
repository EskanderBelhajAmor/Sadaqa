import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhdaaComponent } from './ihdaa.component';

describe('IhdaaComponent', () => {
  let component: IhdaaComponent;
  let fixture: ComponentFixture<IhdaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IhdaaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IhdaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
