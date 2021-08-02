import {
  Component, ComponentFactory,
  ComponentFactoryResolver, Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ɵcreateInjector as createInjector

} from '@angular/core';

@Component({
  selector: 'hoa-hoa-catalog',
  templateUrl: './hoa-catalog.component.html',
  styleUrls: ['./hoa-catalog.component.scss'],
})
export class HoaCatalogComponent {
  @ViewChild('viewContainer', { read: ViewContainerRef, static: false })
  viewContainerRef!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {}

  ngAfterViewInit() {
    Promise.all([import('catalog/Module'), import('lightbox/AddToLightbox')]).then(([{ CatalogModule }, { AddToLightboxButtonComponent }]) => {
      const injector = createInjector(CatalogModule, this.injector);
      const catalogModule = injector.get(CatalogModule);
      const componentFactory = catalogModule.resolveCatalogComponentFactory();
      const lgbFactory = this.resolver.resolveComponentFactory<{ masterpieceId: number }>(AddToLightboxButtonComponent)
      const componentRef = this.viewContainerRef.createComponent<{  actionsFactory: ComponentFactory<{ masterpieceId: number }> }>(componentFactory, undefined, undefined, );
      componentRef.instance.actionsFactory = lgbFactory
      componentRef.changeDetectorRef.markForCheck()
    });
  }
}
