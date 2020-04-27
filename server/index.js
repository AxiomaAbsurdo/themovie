"use strict"

const path = require('path');
const express = require('express');
const app = new express();

app.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});


app.listen(4000, () => {
    console.log('App listening on port 4000')
});