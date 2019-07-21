import { Component, OnInit, OnChanges } from '@angular/core';
import { TeslaEarnings } from './mock-data/tesla';

@Component({
  selector: 'fdn-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit, OnChanges {
  earnings: TeslaEarnings = new TeslaEarnings();
  classes: string[] = [];
  ngOnInit() {
    this.earnings.revenue = {
      automotiveSales: 6073471,
      automotiveLease: 249748,
      energyAndStorage: 371497,
      servicesAndOther: 531157
    };

    this.earnings.costOfRevenue = {
      automotiveSales: 4658517,
      automotiveLease: 127731,
      energyAndStorage: 328706,
      servicesAndOther: 668019
    };

    this.earnings.operatingExpenses = {
      research: 356297,
      sga: 667452,
      restructuring: 5615
    };

    this.earnings.misc = {
      interestExpense: -174723,
      interestIncome: 7348,
      other: -14205
    };
    this.earnings.provision = 21878;
    this.earnings.netLossNonInterest = 70595;
    this.earnings.shares = 172721487;
  }
  hover(args) {
    this.classes = [];
    this.classes = args;
  }
  hasClass(arg): boolean {
    return this.classes.indexOf(arg) > -1;
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
