const config = require('./dbConfig');
const sql = require('mssql');

const getEmployees = async () => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT * from ContactForms");
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};

const saveContactForm = async (phone, message) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('phone', sql.VarChar, phone)
            .input('message', sql.Text, message)
            .query('INSERT INTO ContactForms (Phone, Message) VALUES (@phone, @message)');
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getEmployees,
    saveContactForm
};
