console.log('testando');
const express = require('express');
const dotenv = require('dotenv').config();
const app = require('./src/app');
const http = require('http');
const path = require('path');

const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
server.listen(process.env.PORT || 3001);
