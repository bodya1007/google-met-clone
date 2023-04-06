const express = require('express');
const cors = require('cors');
const imageRoute = require('./image/image.route')

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use('/', imageRoute)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});