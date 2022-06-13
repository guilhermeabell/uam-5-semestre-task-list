const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public/')));

app.listen(3333, () => {
    console.log('app listen on port http://localhost:3333')
});
