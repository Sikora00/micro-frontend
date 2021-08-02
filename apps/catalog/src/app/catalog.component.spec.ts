import { TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CatalogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'catalog'`, () => {
    const fixture = TestBed.createComponent(CatalogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('catalog');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CatalogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to catalog!'
    );
  });
});
