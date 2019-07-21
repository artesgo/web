export interface Earnings {
    revenue: Object;
    costOfRevenue: Object;
    operatingExpenses: Object;

    totalRevenue: number;
    totalCostOfRevenue: number;
    total(object): number;
}

export class TeslaEarnings implements Earnings {
    // properties
    revenue: {
        automotiveSales: number;
        automotiveLease: number;
        energyAndStorage: number;
        servicesAndOther: number;
    }

    costOfRevenue : {
        automotiveSales: number;
        automotiveLease: number;
        energyAndStorage: number;
        servicesAndOther: number;
    }

    operatingExpenses: {
        research: number;
        sga: number; // sales general / admin
        restructuring: number;
    }

    misc: {
        interestIncome: number;
        interestExpense: number;
        other: number; // income / expense
    }

    provision: number;
    netLossNonInterest: number;

    shares: number;
    // calculations
    get grossProfit(): number {
        return this.totalRevenue - this.totalCostOfRevenue;
    }

    get totalRevenue() {
        return this.total(this.revenue);
    }

    get totalCostOfRevenue() {
        return this.total(this.costOfRevenue);
    }

    get totalMisc() {
        return this.total(this.misc);
    }

    get totalOpEx() {
        return this.total(this.operatingExpenses);
    }

    get incomeFromOperation() {
        return this.grossProfit - this.totalOpEx;
    }

    get incomeBeforeTaxes() {
        return this.incomeFromOperation + this.totalMisc;
    }

    get netIncome() {
        return this.incomeBeforeTaxes - this.provision;
    }

    get netIncomeCommonStock() {
        return this.netIncome - this.netLossNonInterest;
    }
    
    get earningsPerShare() {
        return this.netIncomeCommonStock / this.shares * 1000;
    }
    // helpers
    total(object): number {
        let total = 0;
        Object.keys(object).map(key => total += object[key]);
        return total;
    }
}

