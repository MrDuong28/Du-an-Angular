import { Component, Input, Output } from '@angular/core';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() products: Tproduct[] = [];
}
