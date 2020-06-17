const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
require('dotenv/config');

app.use(morgan('-------- NEW REQUEST -------- \n METHOD: :method \n URL: :url \n STATUS: :status \n RESPONSE: :res[content-length] \n RESPONSE-TIME: :response-time ms \n ----------------------------'));
app.use(express.json());
app.use(routes);


app.listen(process.env.APP_PORT , () =>{
  console.log(`Listen on port ${process.env.APP_PORT}`)
});
