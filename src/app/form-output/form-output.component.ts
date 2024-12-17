import { Component,output,inject } from '@angular/core';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-form-output',
  imports: [],
  templateUrl: './form-output.component.html',
  styleUrl: './form-output.component.css'
})
export class FormOutputComponent {
  
private investmentService = inject(InvestmentService)
  
data= this.investmentService.outputData()




}
