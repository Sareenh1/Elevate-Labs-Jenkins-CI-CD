const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Elevate Lab!'));
app.listen(3000, () => console.log('App running on port 3000'));
