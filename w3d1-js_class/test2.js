describe("Deposite", function () {
  let account;
  before(function(){
      account = new Account(1);
      account.deposit(100);

  });


  it("deposites money to account",
      function () {
          assert.equal(100, account.getBalance());
  });
});

describe("Withdraw", function () {
  let account;
  before(function(){
      account = new Account(1);
      account.deposit(100);
      account.withdraw(50);

  });


  it("withdraw money from account",
      function () {
          assert.equal(50, account.getBalance());
  });
});


// SavingAccount Testing

describe("Create saving Account", function () {
  let account;
  before(function(){
      account = new SavingsAccount(1, 3);
      account.deposit(100);

  });


  it("creates new saving account",
      function () {
          assert.equal(1, account.getNumber());
  });
});


describe("Add interest into current balance", function () {
  let account;
  before(function(){
      account = new SavingsAccount(1, 3);
      account.deposit(100);
      account.addInterest();
  });


  it("add interest to current balance",
      function () {
          assert.equal(103, account.getBalance());
          
  });
});


// checking accounts

describe("Create checking Account", function () {
  let account;
  before(function(){
      account = new CheckingAccount(1, 100);
      // account.deposit(100);

  });


  it("creates new checking account",
      function () {
          assert.equal(1, account.getNumber());
  });
});


describe("Withdrawal with amount more than overdraft", function () {
  let account;
  let withdrawFunc;
  before(function(){
      account = new CheckingAccount(1, 100);
      account.deposit(100);

  });


  it("checks illegal withdraw from checking account",
      function () {
          assert.throws(account.withdraw(250), Error, "Insufficient funds");
  });
});


// Bank

describe("Add account for a bank", function () {
  let bankA;
  before(function(){
      bankA = new Bank();
      bankA.addAccount();
  });


  it("adds account to a bank",
      function () {
          assert.equal(1000, bankA.getAccounts()[0].getNumber());
  });
});