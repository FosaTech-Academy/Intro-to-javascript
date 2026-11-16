class PersonAccount {
  constructor(firstName, lastName, currency = "NGN") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.currency = currency;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(amount, description = "CREDIT") {
    if (amount <= 0) return "Invalid amount";
    this.incomes.push({
      id: this.incomes.length + 1,
      amount,
      description,
      timestamp: new Date().toUTCString(),
    });
  }
  addExpense(amount, description = "DEBIT") {
    if (amount > this.accountBalance) return "Insufficient funds";
    this.expenses.push({
      id: this.expenses.length + 1,
      amount,
      description,
      timestamp: new Date().toUTCString(),
    });
  }
  totalIncome() {
    return this.incomes.reduce((acc, cur) => acc + cur.amount, 0);
  }
  totalExpense() {
    return this.expenses.reduce((acc, cur) => acc + cur.amount, 0);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
  accountInfo() {
    return {
      accountHolder: this.firstName + " " + this.lastName,
      acccountBalance: `# ${this.accountBalance()}`,
      totalIncome: `# ${this.totalIncome()}`,
      totalExpense: `# ${this.totalExpense()}`,
      transactionHistory: [...this.incomes, ...this.expenses],
    };
  }
}

const peter = new PersonAccount("Peter", "Idahosa");
peter.addIncome(50000);
peter.addIncome(300000);
peter.addExpense(35000);
peter.addExpense(50000);
peter.addExpense(10000);
peter.addExpense(50000);
peter.addIncome(20000);

console.log(peter.accountInfo());
