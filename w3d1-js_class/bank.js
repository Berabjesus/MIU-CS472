class Bank {

  static nextNumber = 10000;

  constructor(){
    this._accounts = []
  }
  addAccount() {
    const account = new Account(Bank.nextNumber)
    this._accounts.push(account);
    Bank.nextNumber++;
    return account.getNumber();
  }

  getAccount(number) {
    let targetAccount = this._accounts.find(acc => acc.getNumber() === number)
    if (!targetAccount) {
      throw Error("account not found");
    }
    return targetAccount;
  }

  addSavingsAccount(interest) {
    const account = new SavingsAccount(Bank.nextNumber,interest)
    this._accounts.push(account);
    Bank.nextNumber++;
    return account.getNumber();
  }

  addCheckingAccount(overdraft) {
    const account = new CheckingAccount(Bank.nextNumber,overdraft)
    this._accounts.push(account);
    Bank.nextNumber++;
    return account.getNumber();
  }

  closeAccount(number) {
    this._accounts = this._accounts.filter(acc => acc.getNumber() !== number)
  }

  accountReport() {
    let report = '';
    this._accounts.forEach((acc) => {
        report += acc.toString() + "\n";
    });

    return report;
  }

  endOfMonth(){
    let report = '';
    this._accounts.forEach((acc) => {
        report += acc.endOfMonth() + "\n";
    });

    return report;
}
}