import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshafComponent } from './moshaf.component';

describe('MoshafComponent', () => {
  let component: MoshafComponent;
  let fixture: ComponentFixture<MoshafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoshafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoshafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
