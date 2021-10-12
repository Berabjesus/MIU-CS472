describe("Account", function () {
  let account;
  before(function(){
      account = new Account(1234);
      account.deposit(100);

  });

  it("has account number",
  function () {
      assert.equal(1234, account.getNumber());
  });

  it("deposites money to account",
  function () {
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


describe("Account", function () {
  let account;
  before(function(){
      account = new Account(1234);
      account.deposit(100);

  });

});