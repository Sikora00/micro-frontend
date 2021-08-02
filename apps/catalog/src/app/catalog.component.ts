import { Component, ComponentFactory, Input } from '@angular/core';

@Component({
  selector: 'catalog-root',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  items = new Array(20).fill({
    title: 'Photo',
    price: 20,
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  });
  @Input()
  actionsFactory!: ComponentFactory<{ masterpieceId: number }>;
}
