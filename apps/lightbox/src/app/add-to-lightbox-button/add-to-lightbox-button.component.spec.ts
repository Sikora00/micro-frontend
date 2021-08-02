import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToLightboxButtonComponent } from './add-to-lightbox-button.component';

describe('AddToLightboxButtonComponent', () => {
  let component: AddToLightboxButtonComponent;
  let fixture: ComponentFixture<AddToLightboxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToLightboxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToLightboxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
