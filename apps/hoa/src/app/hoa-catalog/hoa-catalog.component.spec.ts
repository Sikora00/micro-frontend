import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaCatalogComponent } from './hoa-catalog.component';

describe('HoaCatalogComponent', () => {
  let component: HoaCatalogComponent;
  let fixture: ComponentFixture<HoaCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoaCatalogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
