import {
  Component,
  ComponentFactory,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'hoa-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input()
  item!: {name: string, price: number, image: string}
  @Input()
  actionsFactory!: ComponentFactory<{ masterpieceId: number }>;
  @ViewChild('actions', { read: ViewContainerRef, static: false })
  viewContainerRef!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.actionsFactory && this.viewContainerRef) {
      const componentRef = this.viewContainerRef.createComponent(this.actionsFactory);
      componentRef.instance.masterpieceId = Math.random()
    }
  }

}
