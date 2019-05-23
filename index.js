require('dotenv').config()

const port = process.env.PORT || 5000

// process environment 

// const express = require('express')

const server = require('./api/server.js');

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
