import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../../interface/user';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css',
})
export class DangnhapComponent {
  constructor(private UserService: UserService) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  route = new Router();
  ngOnInit() {
    if (this.UserService.CheckUserValid()) {
      this.router.navigate(['admin']);
    }
  }
  onSubmitLogin = () => {
    this.UserService.Login(this.loginForm.value as IUser).subscribe(
      (data) => {
        localStorage.setItem('token', data?.accessToken);
        alert('Đăng Nhập thành công');
        this.router.navigate(['admin']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };

  router = new Router();
  CheckToken = () => {
    console.log(this.UserService.CheckUserValid());
  };
}
