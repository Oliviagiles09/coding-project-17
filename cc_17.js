// Task 1 
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
  }

addPurchase(amount) {
  this.purchaseHistory.push(amount);
}

getTotalSpent() {
  return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
}
}
// Task 2
class SalesRep {
  constructor(name) {
    this.name = name;
    this.clients = [];
  }

addClient(customer) {
  this.clients.push(customer);
}

getClientTotal(name) {
  const client = this.clients.find(client => client.name === name);
  return client ? client.getTotalSpent() : 0;
}
}
// Task 3 
class VIPCustomer extends Customer {
  constructor(name, email, vipLevel) {
    super(name, email);
    this.vipLevel - vipLevel;
  }

getTotalSpent() {
  const totalSpent = super.getTotalSpent();
  const bonus = totalSpent * 0.10;
  return totalSpent + bonus;
}
}
