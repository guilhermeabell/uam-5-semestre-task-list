const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'ui/')));

app.listen(3000, () => {
    console.log('app listen on http://localhost:3000')
});
