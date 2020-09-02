const express = require('express');
const app = express()

app.get('/', (reg, res) => {
    res.send('HcUy6Re2LLBRtj')
});

app.listen(3000, () => console.log('listening on port 3000!'));
