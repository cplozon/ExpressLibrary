
//===============================================
//CONNECTION.JS  INITIATES CONNECTION TO MYSQL
//===============================================

// Dependencies
var Sequelize = require("sequelize");

// creates mysql connection using Sequelize
var sequelize = new Sequelize("sequelize_library", "root", "root", {
    host: "localhost",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exports the connection for other files to use
module.exports = sequelize;