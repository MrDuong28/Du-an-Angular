import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.css',
})
export class AdminAddProductComponent {
  constructor(private ProductsService: ProductsService) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),

    category: new FormControl('', [Validators.required]),

    image: new FormControl('', [Validators.required]),

    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  router = new Router();
  onSubmit = () => {
    console.log(this.productForm.value);
    this.ProductsService.Add_Product(this.productForm.value).subscribe(
      (data) => {
        console.log(data);
        alert('Thêm sản phẩm thành công');
        this.router.navigate(['admin']);
      }
    );
  };

  // lấy dữ liệu từ cate gory
  categories: any[] = [];

  ngOnInit(): void {
    this.ProductsService.getAllCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
}
