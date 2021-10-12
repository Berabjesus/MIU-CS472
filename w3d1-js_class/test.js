describe("Account", function () {
  let account;
  before(function(){
      account = new Account(1234);

  });

  it("has account number",
  function () {
      assert.equal(1234, account.getNumber());
  });

  it("deposites money to account",
  function () {
      account.deposit(100);
      assert.equal(100, account.getBalance());
  });

  it("returns correct account balance",
  function () {
      assert.equal(100, account.getBalance());
  });

  it("throws error of the withdraw amount is less than zero",
  function () {
      assert.throws(() => account.withdraw(-1) , Error, "Withdraw amount has to be greater than zero");
  });

  it("throws error of the withdraw amount is greater than balance",
  function () {
      assert.throws(() => account.withdraw(101) , Error, "Insufficient funds");
  });

  it("returns correct string format",
  function () {
      let expect = "Account " + account.getNumber() + ": balance " + account.getBalance()
      assert.equal(expect, account.toString());
  });

});


describe("Savings Account", function () {
  let account;
  before(function(){
      account = new SavingsAccount(1235, 10);
      account.deposit(100);
  });

  it("must be a child of an Account class",
  function () {
      assert.equal(true, SavingsAccount.prototype instanceof Account);
  });

  
  it("sets and gets interest",
  function () {
      account.setInterest(12);
      assert.equal(12, account.getInterest());
  });

  it("adds interest amount to deposit",
  function () {
      account.addInterest();
      assert.equal(112, account.getBalance());
  });

  it("returns correct string format",
  function () {
      let expect = "Account " + account.getNumber() + ": balance " + account.getBalance()+ " : interest rate " + account.getInterest();
      assert.equal(expect, account.toString())
  });

  it("returns end of month statment",
  function () {
      let interestAdded = account.getBalance() * (account.getInterest() / 100);

      let expect = "Interest added SavingAccount " + account.getNumber() + ": balance: " + account.getBalance() + " interest: " + interestAdded;

      assert.equal(expect, account.endOfMonth())
  });

});
