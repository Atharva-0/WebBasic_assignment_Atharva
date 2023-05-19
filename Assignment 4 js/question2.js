/*
Consider following Book Names Array
['Learn Java', 'Basics of Python, Advanced java Concepts', 'Web Basics', 'Easy learning Python', 'Web Fundamentals', 'JAVA fundamentals"]

1. Find all books starting with 'Web'
2. Find all books which are related to Java 
3. Prepend Neo- to every Book Name and Display new book name
4. Display sum of length of every bookname
*/

const bookNames = ['Learn Java', 'Basics of Python, Advanced java Concepts', 'Web Basics', 'Easy learning Python', 'Web Fundamentals', 'JAVA fundamentals'];

// 1. Find all books starting with 'Web'
const booksStartingWithWeb = bookNames.filter(book => book.startsWith('Web'));
console.log(booksStartingWithWeb);

// 2. Find all books which are related to Java
const booksRelatedToJava = bookNames.filter(book => book.toLowerCase().includes('java'));
console.log(booksRelatedToJava);

// 3. Prepend Neo- to every Book Name and Display new book name
const newBookNames = bookNames.map(book => `Neo-${book}`);
console.log(newBookNames);

// 4. Display sum of length of every book name
const sumOfBookNameLengths = bookNames.reduce((sum, book) => sum + book.length, 0);
console.log(sumOfBookNameLengths);
