//=====================================
//api-routes offers a set of fourtes for displaying and saving datat to the db
//=====================================

//Dependencies

// Require for book model

var Book = require("../models/book.js");

//=====================Routes

module.exports = function(app){
    // get all books route
    app.get("/api/all", function(req, res){
        Book.findAll({}).then(function(results){
            res.json(results);
        });
    });

    // get a specific book route
    app.get("/api/:book", function(req, res){
        if (req.params.book){
            Book.findAll({
                where: {
                    title: req.params.book
                }
            }).then(function(results){
                res.json(results);
            });
        }
   });

    app.get("/api/genre/:genre", function(req, res){
        if (req.params.genre){
            Book.findAll({
                where: {
                    genre: req.params.genre
                }
            }).then(function(results){
                res.json(results);
            });
        }
    });
    // get all books from an author

    app.get("/api/author/:author", function(req, res){
        if (req.params.author){
            Book.findAll({
                where: {
                 author: req.params.author
             }
            }).then(function(results){
                res.json(results);
            });
        }
    });

    // get long books - pages longer than 300

    app.get("/api/books/long", function(req, res){
            Book.findAll({
                where: {
                    pages: {
                        $gte: 300
                    }
                }
            }).then(function(results){
                res.json(results);
            });
        });

    // get short books - pages shorter than 150

    app.get("/api/books/short", function(req, res){
        Book.findAll({
            where: {
                pages: {
                    $lte: 150
                }
            }
        }).then(function(results){
            res.json(results);
        });
    });

    // Add a book

    app.post("/api/new", function(req,res){

        Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            pages: req.body.pages
        });
    });

    // Delete a book
    
    app.post("/api/delete", function(req,res){
        Book.destroy({ 
            where: {
                id: req.body.id
            }
        });
    });



};