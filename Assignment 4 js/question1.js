/*
Consider following Book Price Array
[567.50,345.48,767.45,567.60,680, 480,238,458,358.50,560.40,880.56,890.9]
*/

const bookPrices = [567.50, 345.48, 767.45, 567.60, 680, 480, 238, 458, 358.50, 560.40, 880.56, 890.9];

// 1. Find all prices less than 500
const pricesLessThan500 = bookPrices.filter(price => price < 500);
console.log(pricesLessThan500);

// 2. Find the first price greater than 600
const firstPriceGreaterThan600 = bookPrices.find(price => price > 600);
console.log(firstPriceGreaterThan600);

// 3. Find all prices between 500 and 600
const pricesBetween500and600 = bookPrices.filter(price => price > 500 && price < 600);
console.log(pricesBetween500and600);

// 4. Display sum of all prices
const sumOfAllPrices = bookPrices.reduce((sum, price) => sum + price, 0);
console.log(sumOfAllPrices);

// 5. Display sum of all prices but initial value of sum should be 100
const sumOfAllPricesWithInitialValue = bookPrices.reduce((sum, price) => sum + price, 100);
console.log(sumOfAllPricesWithInitialValue);

// 6. Double every price from array and display new prices
const doubledPrices = bookPrices.map(price => price * 2);
console.log(doubledPrices);

// 7. Display sum of prices which are less than 500
const sumOfPricesLessThan500 = bookPrices.filter(price => price < 500).reduce((sum, price) => sum + price, 0);
console.log(sumOfPricesLessThan500);
