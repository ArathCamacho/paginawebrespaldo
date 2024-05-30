// server/database.js

/*const mysql = require('mysql2');
const connection = require('./conexion'); // Importa la conexión a MySQL desde conexion.js

// Función para obtener todos los productos del carrito
function getAllProducts(callback) {
    const sql = 'SELECT * FROM carrito';
    connection.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

// Función para añadir un producto al carrito
function addProductToCart(product, callback) {
    const { title, price, quantity } = product;
    const sql = 'INSERT INTO carrito (title, price, quantity) VALUES (?, ?, ?)';
    connection.query(sql, [title, price, quantity], (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
}

// Función para eliminar un producto del carrito por título
function removeProductFromCart(title, callback) {
    const sql = 'DELETE FROM carrito WHERE title = ?';
    connection.query(sql, [title], (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
}

module.exports = {
    getAllProducts,
    addProductToCart,
    removeProductFromCart
};
*/