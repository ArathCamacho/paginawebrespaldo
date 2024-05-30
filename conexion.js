/*// Importar el módulo mysql2
const mysql = require('mysql2');

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',      // El host de tu servidor MySQL
    user: 'root',           // Tu usuario de MySQL
    password: 'Halo_2017',  // Tu contraseña de MySQL
    database: 'bdpagweb'  // El nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        throw err;
    }
    console.log('Conexión a MySQL establecida correctamente');
});

// Manejar errores inesperados en la conexión
connection.on('error', err => {
    console.error('Error inesperado de MySQL:', err);
    throw err;
});

// Exportar el objeto de conexión para que pueda ser utilizado en otros archivos
module.exports = connection;
*/