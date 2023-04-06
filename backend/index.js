const express = require('express');
const imageRoute = require('./image/image.route')

const app = express();
const port = 3000;

app.use('/',imageRoute)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });