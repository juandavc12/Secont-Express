const express = require('express');
const app = express()

app.get('/', (reg, res) => {
    res.send('<h1>HcUy6Re2LLBRtj</h1>')
});

app.listen(3000, () => console.log('listening on port 3000!'));
