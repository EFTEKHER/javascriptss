const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/demo', (req, res) => {
    res.json({
        message: 'Data received successfully!',
        data: req.body
    });
});
app.get('/api/demo', (req, res) => {9
    res.json({
        message: 'GET request received successfully!',
        data: req.body
    });
});
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
