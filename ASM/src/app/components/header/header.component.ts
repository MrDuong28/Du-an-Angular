import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IMenu } from '../../../interface/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchform = new FormGroup({
    keywords: new FormControl(''),
  });
  router = new Router();
  menus: IMenu[] = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
      parent: 0,
    },
    {
      id: 2,
      name: 'Catalog',
      path: 'catalog',
      parent: 0,
    },

    {
      id: 3,
      name: 'Blog',
      path: 'blog',
      parent: 0,
    },
    {
      id: 4,
      name: 'Page',
      path: 'page',
      parent: 0,
    },
    {
      id: 5,
      name: 'About Us',
      path: 'aboutus',
      parent: 0,
    },
  ];
  checkChildrent = (menuid: number): boolean => {
    let check: boolean = false;
    for (let item of this.menus) {
      if (item.parent === menuid) {
        check = true;
      }
    }
    return check;
  };
  onSearch = () => {
    const keywords = this.searchform.controls.keywords.value;
    this.router.navigate(['search'], {
      queryParams: { keywords: keywords },
    });
  };
}
