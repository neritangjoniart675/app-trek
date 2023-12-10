// file: complexExample.js

// This is a complex JavaScript example demonstrating various advanced concepts and techniques.
// It creates a virtual bookstore, where books can be added, removed, searched, and purchased.

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  toString() {
    return `${this.title} by ${this.author} - $${this.price.toFixed(2)}`;
  }
}

class Bookstore {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(title, author, price) {
    const book = new Book(title, author, price);
    this.books.push(book);
    console.log(`Added book: ${book}`);
  }

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Removed book: ${removedBook}`);
    } else {
      console.log(`Book not found: ${title}`);
    }
  }

  searchByAuthor(author) {
    const foundBooks = this.books.filter(book => book.author === author);

    if (foundBooks.length > 0) {
      console.log(`Books by ${author}:`);
      foundBooks.forEach(book => console.log(book));
    } else {
      console.log(`No books found by ${author}.`);
    }
  }

  purchaseBook(title) {
    const book = this.books.find(book => book.title === title);

    if (book) {
      console.log(`Purchased book: ${book}`);
      this.books = this.books.filter(book => book.title !== title);
    } else {
      console.log(`Book not available: ${title}`);
    }
  }
}

// Usage example:

const myBookstore = new Bookstore("My Bookstore");

myBookstore.addBook("The Great Gatsby", "F. Scott Fitzgerald", 9.99);
myBookstore.addBook("To Kill a Mockingbird", "Harper Lee", 12.99);
myBookstore.addBook("1984", "George Orwell", 8.49);

myBookstore.searchByAuthor("Harper Lee");

myBookstore.purchaseBook("The Great Gatsby");
myBookstore.removeBook("To Kill a Mockingbird");

myBookstore.searchByAuthor("Harper Lee");

console.log(myBookstore.books);

// Output:
// Added book: The Great Gatsby by F. Scott Fitzgerald - $9.99
// Added book: To Kill a Mockingbird by Harper Lee - $12.99
// Added book: 1984 by George Orwell - $8.49
// Books by Harper Lee:
// To Kill a Mockingbird by Harper Lee - $12.99
// Purchased book: The Great Gatsby by F. Scott Fitzgerald - $9.99
// Removed book: To Kill a Mockingbird by Harper Lee - $12.99
// No books found by Harper Lee.
// [Book {title: "1984", author: "George Orwell", price: 8.49}]