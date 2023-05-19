/* 
Implement Book class having instance variables to hold book id, book name, book author, book price.
 Class must have paramaterized constructor and a method which returns all 
 book details (return all variables values using $(1) All instance variables must be private, 
 and Provide public get set properties in class to access instance variables outside.

Create 5 Book objects and store in one book array
Implement following using forEach, find, filter, map, reduce
*/

class Book {
    #id;
    #name;
    #author;
    #price;

    constructor(id, name, author, price) {
      this._id = id;
      this._name = name;
      this._author = author;
      this._price = price;
    }
  
    get id() {
      return this._id;
    }
  
    set id(id) {
      this._id = id;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get author() {
      return this._author;
    }
  
    set author(author) {
      this._author = author;
    }
  
    get price() {
      return this._price;
    }
  
    set price(price) {
      this._price = price;
    }
  
    getDetails() {
      return `ID: ${this._id}, Name: ${this._name}, Author: ${this._author}, Price: ${this._price}`;
    }
  }
  
  const books = [];
  books.push(new Book(1, "Believe", "suresh", 110.0));
  books.push(new Book(2, "Harry-Potter", "Rowling", 220.0));
  books.push(new Book(3, "christmas", "JK", 330.0));
  books.push(new Book(4, "Alice in wonderland", "lewis carrol", 440.0));
  books.push(new Book(5, "lord of rings", "Mavi", 550.0));
  
  // 1. Iterate Book array using forEach
  console.log("Iterating Book array using forEach:");
  books.forEach(book => console.log(book.getDetails()));
  
  // 2. Find all books having price less than 500
  console.log("\nBooks with price less than 500:");
  const cheapBooks = books.filter(book => book.price < 500.0);
  cheapBooks.forEach(book => console.log(book.getDetails()));
  
  // 3. Find first book having price greater than 600
  console.log("\nFirst book with price greater than 600:");
  const expensiveBook = books.find(book => book.price > 600.0);
  if (expensiveBook) {
    console.log(expensiveBook.getDetails());
  } else {
    console.log("No book found with price greater than 600");
  }
  
  // 4. Find all Java related books
  console.log("\nJava related books:");
  const javaBooks = books.filter(book => book.name.toLowerCase().includes("java"));
  javaBooks.forEach(book => console.log(book.getDetails()));
  
  // 5. Make sum of all Book Prices
  const totalBookPrice = books.reduce((total, book) => total + book.price, 0);
  console.log("\nTotal Book Price:", totalBookPrice);
  
  // 6. Store Book Author of every book in separate array
  console.log("\nBook Authors:");
  const bookAuthors = books.map(book => book.author);
  console.log(bookAuthors);

  // 7. Display Books having Author name starting with M/m

const BooksAuthorStartM = books.filter(book => book.author.toLowerCase().startsWith('m'));
console.log(BooksAuthorStartM);