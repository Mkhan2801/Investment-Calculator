import { Component, output,inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Investment } from '../service/investment.model';
import { InvestmentService } from '../service/investment.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-form-input',
  imports: [FormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
 
  constructor (private router: Router){}
  
  private investmentService = inject(InvestmentService)

  initialInvestment = 0
  munthlyInvestment = 0
  duration = 0
  expectedReturn = 0

  

  data!: Investment
  submit(){

    
      this.data = {
        initialInvestment:this.initialInvestment,
        annualInvestment:this.munthlyInvestment,
        duration:this.duration,
        expectedReturn:this.expectedReturn
      }
      
      this.investmentService.calulate(this.data)
      this.router.navigate(['/result'])
      
      
  }
}
