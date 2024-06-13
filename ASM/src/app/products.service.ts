import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000/products';
  Get_All_Products = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };
  Add_Product = (product: any): Observable<any> => {
    return this.http.post(this.API_URL, product);
  };

  Delete_Product = (id: string): Observable<any> => {
    return this.http.delete(`${this.API_URL}/${id}`);
  };
  getAllCategories = (): Observable<any> => {
    return this.http.get('http://localhost:3000/category');
  };
  add_category = (category: any): Observable<any> => {
    return this.http.post('http://localhost:3000/category', category);
  };
  deleteCategory = (id: string): Observable<any> => {
    return this.http.delete(`http://localhost:3000/category/${id}`);
  };
  Update_Cate = (id: string, Catedata: any): Observable<any> => {
    return this.http.put(`http://localhost:3000/category/${id}`, Catedata);
  };
  Update_Pro = (id: string, Prodata: any): Observable<any> => {
    return this.http.put(`${this.API_URL}/${id}`, Prodata);
  };
  get_product_by_id = (id: string): Observable<any> => {
    return this.http.get(`${this.API_URL}/${id}`);
  };
  get_cate_by_id = (id: string): Observable<any> => {
    return this.http.get(`http://localhost:3000/category/${id}`);
  };
  Get_Products_By_Keyword = (keyword: string): Observable<any> => {
    return this.http.get(this.API_URL + '?name_like=' + keyword);
  };
}
