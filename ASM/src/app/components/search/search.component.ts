import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  products: Tproduct[] = [];
  keywords: string[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      const keywords = data['keywords'];
      this.keywords = keywords;
      this.productsService
        .Get_Products_By_Keyword(keywords)
        .subscribe((data) => {
          this.products = data;
        });
    });
  }
}
