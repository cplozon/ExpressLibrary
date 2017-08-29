//Pull in sequelize package

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Create a book model

var Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING 
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    pages: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

// Sync with DB
Book.sync();
// Export the Book Model
module.exports = Book;