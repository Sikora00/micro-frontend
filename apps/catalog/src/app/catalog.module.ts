import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogComponent } from './catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CatalogComponent, CatalogItemComponent],
  imports: [BrowserModule, CommonModule, MatCardModule, MatButtonModule, CommonModule],
  providers: [],
  bootstrap: [CatalogComponent],
  exports: [CatalogComponent],
})
export class CatalogModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolveCatalogComponentFactory(): ComponentFactory<CatalogComponent> {
    return this.resolver.resolveComponentFactory(CatalogComponent);
  }
}
