import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Tproduct[] = [];
  // ở đây mình sẽ tạo ra một biến products có kiểu dữ liệu là một mảng các object có kiểu dữ liệu là Tproduct và gán giá trị mặc định là một mảng rỗng
  constructor(private ProductsService: ProductsService) {}
  // ở đây mình sẽ tạo ra một constructor với tham số truyền vào là http có kiểu dữ liệu là HttpClient
  ngOnInit() {
    this.ProductsService.Get_All_Products().subscribe((data) => {
      // ở đây mình sẽ gọi đến hàm Get_All_Products từ service và sử dụng phương thức subscribe để lấy dữ liệu trả về
      this.products = data;
      console.log(data);
    });
  }
}
