var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()

    creditCardNumber: finance.creditCardNumber(),
    securityCode: finance.creditCardCVV(),

    creditCardNumber: string;
    cardholder: string;
    expirationDate: Date; //fututre-only in tagul de input
    securityCode: String; //trebuie sa fac o functie , max 3
    amount: number; // <input type="number" min="0">
  });
}

console.log(JSON.stringify(database));