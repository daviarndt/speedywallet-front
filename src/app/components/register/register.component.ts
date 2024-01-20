import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      document: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      userType: [null, Validators.required]
    });
  }

  register() {
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const email = this.registerForm.value.email;
    const document = this.registerForm.value.document;
    const password = this.registerForm.value.password;
    const userType = this.registerForm.value.userType;

    this.registerService.register(
      firstName,
      lastName,
      email,
      document,
      password,
      userType
    ).subscribe({
      next: (value) => {
        console.log('Saved: ', value)
      },
      error: (err) => {
        console.log('Register Error: ', err)
      }
    })
  }
}
