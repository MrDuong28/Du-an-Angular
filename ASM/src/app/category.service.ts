import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tcate } from '../interface/cate';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000/categories';

  Get_All_Category = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };

  Add_Category = (data: Tcate): Observable<any> => {
    return this.http.post(this.API_URL, data);
  };

  Get_Category_By_Id = (id: string): Observable<any> => {
    return this.http.get(this.API_URL + '/' + id);
  };

  Edit_Category = (id: string, data: Tcate): Observable<any> => {
    return this.http.put(this.API_URL + '/' + id, data);
  };
}
