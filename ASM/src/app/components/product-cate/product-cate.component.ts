import { Component, Input } from '@angular/core';
import { Tproduct } from '../../../interface/product';
import { ProductsService } from '../../products.service';
import { Tcate } from '../../../interface/cate';
import { CategoryService } from './../../category.service';

@Component({
  selector: 'app-product-cate',
  templateUrl: './product-cate.component.html',
  styleUrl: './product-cate.component.css',
})
export class ProductCateComponent {
  products: Tproduct[] = [];
  categories: Tcate[] = [];
  selectedCategories: string[] = [];
  filteredProducts: Tproduct[] = [];

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.productsService.Get_All_Products().subscribe(
      (data: Tproduct[]) => {
        this.products = data;
        this.filteredProducts = data; // Display all products initially
        console.log(data);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
    this.categoryService.Get_All_Category().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }

  toggleCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c !== category
      );
    } else {
      this.selectedCategories.push(category);
    }
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.selectedCategories.length === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((data: any) =>
        this.selectedCategories.includes(data.category)
      );
    }
  }
}
