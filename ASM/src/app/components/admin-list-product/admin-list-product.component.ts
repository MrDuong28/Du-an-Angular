import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-product',
  templateUrl: './admin-list-product.component.html',
  styleUrl: './admin-list-product.component.css',
})
export class AdminListProductComponent {
  router = new Router();
  products: Tproduct[] = [];
  constructor(private ProductsService: ProductsService) {}
  ngOnInit(): void {
    this.ProductsService.Get_All_Products().subscribe((data) => {
      this.products = data;
    });
  }
  onDelete = (id: any) => {
    if (confirm('Bạn chắc chứ?')) {
      this.ProductsService.Delete_Product(id).subscribe((data) => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  };
  Logout = () => {
    // localStorage.setItem('token
    localStorage.removeItem('token');
    this.router.navigate(['']);
  };
}
