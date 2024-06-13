import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  products: Tproduct[] = [];
  product: Tproduct | null = null; // Add a single product property

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsService.Get_All_Products().subscribe((data) => {
      // Populate products array with all products
      this.products = data;
      console.log('All Products:', data);
    });

    const productId = this.route.snapshot.params['id'];
    this.productsService.get_product_by_id(productId).subscribe((data) => {
      // Populate single product with the specific product
      this.product = data;
      console.log('Product by ID:', data);
    });
  }
}
