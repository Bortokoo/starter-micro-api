var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('a');
    res.end();
}).listen(process.env.PORT || 3000);

// Define the doGet function, which handles incoming HTTP GET requests.

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const query = req.query.q;
        const response = await axios.get(decodeURIComponent(query));
        res.json({ result: 'success', response: response.data });
    } catch (error) {
        res.status(500).json({ result: 'error', error: 'Unable to fetch' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});