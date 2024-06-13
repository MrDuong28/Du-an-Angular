import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-product-footer',
  templateUrl: './product-footer.component.html',
  styleUrl: './product-footer.component.css',
})
export class ProductFooterComponent {
  products: Tproduct[] = [
    {
      name: 'Sản Phẩm 1',
      image:
        'https://vn.canon/media/image/2022/11/01/c8c8ab88ead148e9b64490fdd764bcf4_EOS+R6+Mark+II+RF24-105mm+f4-7.1+IS+STM+front+slant.png',
      price: 100,
      star: 4,
    },
    {
      name: 'SP 2',
      image:
        'https://vn.canon/media/image/2022/11/01/c8c8ab88ead148e9b64490fdd764bcf4_EOS+R6+Mark+II+RF24-105mm+f4-7.1+IS+STM+front+slant.png',
      price: 200,
      star: 3,
    },
    {
      name: 'SP 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 300,
      star: 2,
    },
    {
      name: 'SP 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 300,
      star: 1,
    },
    {
      name: 'SP 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 300,
      star: 5,
    },
    {
      name: 'SP 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 300,
      star: 1,
    },
    {
      name: 'SP 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 300,
      star: 1,
    },
    {
      name: 'SP 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 300,
      star: 1,
    },
  ];
}
