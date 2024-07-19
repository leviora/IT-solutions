const express = require('express');
const dbOperation = require('./dbFiles/db.Operation'); // Upewnij się, że ścieżka jest poprawna
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { phone, message } = req.body;

    try {
        const result = await dbOperation.saveContactForm(phone, message);
        res.status(200).send('Data saved successfully.');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Error saving data.');
    }
});

const port = 3002;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});











// const express = require('express');
// const cors = require('cors');
// const sql = require('mssql');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const config = {
//     server: 'DESKTOP-JJUF2I6', 
//     database: 'ContactFormsDB',
//     options: {
//         encrypt: false, 
//         integratedSecurity: true, 
//         trustServerCertificate: true
//     },
//     driver: 'msnodesqlv8'
// };

// const poolPromise = new sql.ConnectionPool(config)
//     .connect()
//     .then(pool => {
//         console.log('Connected to SQL Server');
//         return pool;
//     })
//     .catch(err => {
//         console.error('SQL Server connection error:', err);
//         process.exit(1);
//     });

// app.post('/api/contact', async (req, res) => {
//     const { phone, message } = req.body;

//     try {
//         const pool = await poolPromise;
//         await pool.request()
//             .input('phone', sql.VarChar, phone)
//             .input('message', sql.Text, message)
//             .query('INSERT INTO ContactForms (Phone, Message) VALUES (@phone, @message)');
        
//         res.status(200).send('Data saved successfully.');
//     } catch (err) {
//         console.error('Error saving data:', err);
//         res.status(500).send('Error saving data.');
//     }
// });

// const port = 3002;
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });
