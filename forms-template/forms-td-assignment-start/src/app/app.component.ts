import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email!: string;
  subscription!: string;
  password!: string;

  defaultSubscription = 'advanced';

  onSubmit(form: NgForm) {
    console.log(form);
    this.email = form.value.email;
    this.subscription = form.value.subscription;
    this.password = form.value.password;

    console.log('Email: ' + this.email);
    console.log('Subscription: ' + this.subscription);
    console.log('Password: ' + this.password);
  }
}
