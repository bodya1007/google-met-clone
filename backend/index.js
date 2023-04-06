const express = require('express');
const cors = require('cors');
const imageRoute = require('./image/image.route')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/', imageRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});