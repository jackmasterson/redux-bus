const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/build'));
}