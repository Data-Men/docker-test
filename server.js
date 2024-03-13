const express = require('express');
const pool = require('./sql_util');

// Create Express server
const app = express();

// Define a route
app.get('/', async (req, res) => {
    // Query the database
    try {
        const [query_result, fields, err] = await pool.query('show tables;');
        return res.json(query_result);
    } catch (error) {
        console.error('Error querying database:', error);
        res.status(500).send('Error querying database');
        return;
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
