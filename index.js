
class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}
class Transaction {

  constructor (amount,account) {
    this.amount = amount;
    this.account = account;
  }
commit(value) {
  this.account.balance += this.value;
}
}

class Deposit extends Transaction {


  get value () {
    return this.amount;

  }

}

class Withdrawal extends Transaction {

  get value () {
    return - (this.amount)
}

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const MyAccount = new Account('Sarah');

t3 = new Deposit(1000, MyAccount);
t3.commit(t3.value);



t1 = new Withdrawal(50.25, MyAccount);
t1.commit(t1.value);
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, MyAccount);
t2.commit(t2.value);
console.log('Transaction 2:', t2);

console.log('Balance:', MyAccount.balance);

console.log('-----------------');

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t11 = new Deposit(120.00, myAccount);
t11.commit();

const t21 = new Withdrawal(50.00, myAccount);
t21.commit();

console.log('Ending Balance:', myAccount.balance);
