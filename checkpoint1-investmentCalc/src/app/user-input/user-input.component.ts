import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent { 
  @Input() userInput : InvestmentInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10
  };

  @Output() calculate = new EventEmitter<InvestmentInput>();
  
  onSubmit() {
    console.log(this.userInput);
    this.calculate.emit(this.userInput);
  }
}

