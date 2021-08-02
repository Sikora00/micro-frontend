import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hoa-add-to-lightbox-button',
  templateUrl: './add-to-lightbox-button.component.html',
  styleUrls: ['./add-to-lightbox-button.component.scss']
})
export class AddToLightboxButtonComponent implements OnInit {
  @Input()
  masterpieceId!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.masterpieceId);
  }

}
