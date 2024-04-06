import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanComponent } from './kisan.component';

describe('KisanComponent', () => {
  let component: KisanComponent;
  let fixture: ComponentFixture<KisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
