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

// Task 4
const customer1 = new Customer("John Doe", "john.doe@example.com");
customer1.addPurchase(200);
customer1.addPurchase(150);

const customer2 = new VIPCustomer("Jane Smith", "jane.smith@example.com", "Platinum");
customer2.addPurchase(400);
customer2.addPurchase(200);

const salesRep = new SalesRep("Alice Johnson");
salesRep.addClient(customer1);
salesRep.addClient(customer2);

console.log(`${customer1.name} total spent: $${customer1.getTotalSpent()}`);
console.log(`${customer2.name} total spent (with bonus): $${customer2.getTotalSpent()}`);

console.log(`Sales Rep: ${salesRep.name}`);
salesRep.clients.forEach(client => {
  console.log(`${client.name} has spent a total of $${client.getTotalSpent()}`);
});

const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
console.log(`Total revenue from all customers: $${totalRevenue}`);

const highSpendingCustomers = salesRep.clients.filter(client => client.getTotalSpent() > 500);
console.log("High-spending customers:");
highSpendingCustomers.forEach(client => console.log(client.name));

const customerSummary = salesRep.clients.map(client => ({
  name: client.name,
  totalSpent: client.getTotalSpent()
}));
console.log("Customer Summary:");
customerSummary.forEach(summary => {
  console.log(`${summary.name}: $${summary.totalSpent}`);
});
