import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../../interface/user';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrl: './dangky.component.css',
})
export class DangkyComponent {
  constructor(private UserService: UserService) {}
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  route = new Router();
  onSubmit = () => {
    this.UserService.Register(this.registerForm.value as IUser).subscribe(
      (data) => {
        this.registerForm;
        alert('Đăng ký thành công');
        this.route.navigate(['/dangnhap']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };
}
