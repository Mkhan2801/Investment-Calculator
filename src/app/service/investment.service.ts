import { Injectable } from '@angular/core';
import { type Investment } from './investment.model';

@Injectable({ providedIn: 'root' })

export class InvestmentService {
    private investmentData!: Investment

    calulate(investment: Investment) {
        this.investmentData = investment
    }

    outputData() {
        
        let capital =this.investmentData.initialInvestment
        let output = [{
            count: 0,
                investmentValue: capital,
                intrest: 0,
                investedCapital: capital
        }]
        for (let month = 1; month <= this.investmentData.duration; month++) {
            let totalinvest = this.investmentData.initialInvestment + this.investmentData.annualInvestment * month
            let intrest = Math.floor(capital * this.investmentData.expectedReturn / 100 )
            capital += intrest 
            var data = {
                count: month,
                investmentValue: totalinvest,
                intrest: intrest,
                investedCapital: capital + this.investmentData.annualInvestment * month
            }

            output.push(data)

        }

        return output;
    }
}