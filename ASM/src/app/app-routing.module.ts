import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViwerComponent } from './layout/viwer/viwer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCateComponent } from './components/product-cate/product-cate.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { AdminListProductComponent } from './components/admin-list-product/admin-list-product.component';
import { AdminListCateComponent } from './components/admin-list-cate/admin-list-cate.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminAddCateComponent } from './components/admin-add-cate/admin-add-cate.component';
import { AdminEditCateComponent } from './components/admin-edit-cate/admin-edit-cate.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { DangkyComponent } from './components/dangky/dangky.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: ViwerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'catalog', component: ProductCateComponent },
      { path: 'page', component: ProductCartComponent },

      { path: 'chitiet/:id', component: ProductDetailComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminListProductComponent },
      { path: 'listCate', component: AdminListCateComponent },
      { path: 'addPro', component: AdminAddProductComponent },
      { path: 'addCate', component: AdminAddCateComponent },
      { path: 'editCate/:id', component: AdminEditCateComponent },
      { path: 'editPro/:id', component: AdminEditProductComponent },
      { path: 'dangky', component: DangkyComponent },
      { path: 'dangnhap', component: DangnhapComponent },
    ],
  },

  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
