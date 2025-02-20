import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectForm : FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required],[this.forbiddenNames.bind(this)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    status: new FormControl()
  });

  defaultStatus = 'Stable';
  forbiddenNames(value: FormControl): Promise<any> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(value.value === 'Test') {
          resolve({'forbiddenName': true});
        } else {
          resolve(null);
        }
      },1500);
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
