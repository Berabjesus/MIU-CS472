class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  setInterest(interest) {
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  addInterest() {
    this.deposit((this.getBalance() * this.getInterest()) / 100)
  }

  toString() {
    return "Account " + this._number + ": balance " + this._balance + " : interest rate " + this._interest;
  }

  endOfMonth(){
    let interestAdded = this.getBalance() * (this.getInterest() / 100);
    
    let result = 'Interest added SavingAccount ' + this.getNumber() + ': balance: ' + this.getBalance() + ' interest: ' + interestAdded;

    this.addInterest();

    return result;
}
}