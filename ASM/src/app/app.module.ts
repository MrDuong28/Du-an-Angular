import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product1Component } from './components/product-1/product-1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductFooterComponent } from './components/product-footer/product-footer.component';
import { ViwerComponent } from './layout/viwer/viwer.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCateComponent } from './components/product-cate/product-cate.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminListProductComponent } from './components/admin-list-product/admin-list-product.component';
import { AdminListCateComponent } from './components/admin-list-cate/admin-list-cate.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminAddCateComponent } from './components/admin-add-cate/admin-add-cate.component';
import { AdminEditCateComponent } from './components/admin-edit-cate/admin-edit-cate.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { DangkyComponent } from './components/dangky/dangky.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { SearchComponent } from './components/search/search.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    Product1Component,
    HeaderComponent,
    FooterComponent,
    ProductFooterComponent,
    ViwerComponent,
    AdminComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductCateComponent,
    ProductCartComponent,
    BannerComponent,
    AdminListProductComponent,
    AdminListCateComponent,
    AdminAddProductComponent,
    AdminAddCateComponent,
    AdminEditCateComponent,
    AdminEditProductComponent,
    DangkyComponent,
    DangnhapComponent,
    SearchComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
