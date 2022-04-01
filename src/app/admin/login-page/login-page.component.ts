import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from '../../shared/interfaces';
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  submitted = false
  message!: string

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['loginAgain']) {
        this.message = 'Введите данные'
      } else if (params['authFailed']) {
        this.message = 'Сессия истекла. Введите данные заново'
      }
    })
  }

  submit() {
    if (this.myForm.invalid) {
      return
    }

    this.submitted = true

    const user: User = {
      email: this.myForm.value.email,
      password: this.myForm.value.password,
    }

    this.auth.login(user).subscribe(() => {
      this.myForm.reset()
      this.router.navigate(['/admin', '/dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }

}
