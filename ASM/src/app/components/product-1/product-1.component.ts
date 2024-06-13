import { Component, Input } from '@angular/core';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-product-1',
  templateUrl: './product-1.component.html',
  styleUrl: './product-1.component.css',
})
export class Product1Component {
  @Input() productday: Tproduct = {} as Tproduct;
  //  ở đây mình sẽ tạo ra một biến productday có kiểu dữ liệu là Tproduct và gán giá trị mặc định là một object rỗng
  // ở đây mình sử dụng @Input để nhận giá trị từ component cha truyền vào
  getStars(starCount: number): Tproduct[] {
    // ở đây mình sẽ tạo ra một hàm getStars với tham số truyền vào là starCount có kiểu dữ liệu là number và trả về một mảng với số lượng phần tử là starCount
    return new Array(starCount || 0);
    // ở đây mình sẽ trả về một mảng với số lượng phần tử là starCount hoặc 0 nếu không có giá trị truyền vào
  }
}
