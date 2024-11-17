import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasbihComponent } from './tasbih.component';

describe('TasbihComponent', () => {
  let component: TasbihComponent;
  let fixture: ComponentFixture<TasbihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasbihComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasbihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
