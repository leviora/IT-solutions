const config = {
    server: 'DESKTOP-JJUF2I6',  // Nazwa serwera SQL
    host: 'localhost\\SQLEXPRESS',
    database: 'ContactFormsDB', // Nazwa bazy danych
    options: {
        trustedConnection: true, // Użyj Windows Authentication
        trustServerCertificate: true
    },
    // driver: 'msnodesqlv8' 
};


module.exports = config;







// const sql = require('mssql');

// const config = {
//     server: 'DESKTOP-JJUF2I6', 
//     database: 'ContactFormsDB',
//     options: {
//         encrypt: false, 
//         trustedConnection: true 
//     },
//     driver: 'msnodesqlv8'
// };

// const poolPromise = new sql.ConnectionPool(config)
//     .connect()
//     .then(pool => {
//         console.log('Połączono z bazą danych SQL Server');
//         return pool;
//     })
//     .catch(err => {
//         console.error('Błąd połączenia z bazą danych SQL Server:', err);
//         process.exit(1);
//     });

// module.exports = {
//     sql,
//     poolPromise
// };
