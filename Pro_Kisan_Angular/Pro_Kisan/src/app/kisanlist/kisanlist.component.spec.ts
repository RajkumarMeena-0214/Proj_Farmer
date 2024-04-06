import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanlistComponent } from './kisanlist.component';

describe('KisanlistComponent', () => {
  let component: KisanlistComponent;
  let fixture: ComponentFixture<KisanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisanlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
