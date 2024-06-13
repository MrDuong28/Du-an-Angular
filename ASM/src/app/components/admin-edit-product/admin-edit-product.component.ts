import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrl: './admin-edit-product.component.css',
})
export class AdminEditProductComponent {
  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),

    category: new FormControl('', [Validators.required]),

    image: new FormControl('', [Validators.required]),

    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  router = new Router();

  // lấy dữ liệu từ cate gory
  categories: any[] = [];
  id = this.route.snapshot.params['id'];
  ngOnInit() {
    this.ProductsService.get_product_by_id(this.id).subscribe((data) => {
      this.productForm.controls.name.setValue(data.name);

      this.productForm.controls.image.setValue(data.image);
      this.productForm.controls.price.setValue(data.price);
      this.productForm.controls.category.setValue(data.category);
    });
    this.ProductsService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  onSubmit = () => {
    this.ProductsService.Update_Pro(this.id, this.productForm.value).subscribe(
      (data) => {
        console.log(data);
        alert('Update success');
        this.router.navigate(['/admin']);
      }
    );
  };
}
