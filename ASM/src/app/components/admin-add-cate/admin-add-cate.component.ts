import { Router } from '@angular/router';
import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-cate',
  templateUrl: './admin-add-cate.component.html',
  styleUrl: './admin-add-cate.component.css',
})
export class AdminAddCateComponent {
  constructor(private ProductsService: ProductsService) {}
  cateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  router = new Router();

  onSubmit = () => {
    this.ProductsService.add_category(this.cateForm.value).subscribe((data) => {
      this.router.navigate(['/admin/listCate']);
    });
  };
}
