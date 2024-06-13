import { Router } from '@angular/router';
import { Tcate } from '../../../interface/cate';
import { Tproduct } from '../../../interface/product';
import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list-cate',
  templateUrl: './admin-list-cate.component.html',
  styleUrl: './admin-list-cate.component.css',
})
export class AdminListCateComponent {
  cates: Tcate[] = [];
  router = new Router();
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllCategories().subscribe((data) => {
      this.cates = data;
      console.log(data);
    });
  }
  onDelete = (id: any) => {
    if (confirm('Bạn chắc chứ?')) {
      this.productsService.deleteCategory(id).subscribe((data) => {
        this.cates = this.cates.filter((student) => student.id !== id);
      });
    }
  };
  Logout = () => {
    // localStorage.setItem('token
    localStorage.removeItem('token');
    this.router.navigate(['']);
  };
}
