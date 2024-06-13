import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-cate',
  templateUrl: './admin-edit-cate.component.html',
  styleUrl: './admin-edit-cate.component.css',
})
export class AdminEditCateComponent {
  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  cateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  router = new Router();
  CateId = this.route.snapshot.params['id'];
  ngOnInit() {
    this.ProductsService.get_cate_by_id(this.CateId).subscribe((data) => {
      console.log(data);
      this.cateForm.controls.name.setValue(data.name);
    });
  }
  onSubmit = () => {
    this.ProductsService.Update_Cate(
      this.CateId,
      this.cateForm.value
    ).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/listCate']);
    });
  };
}
