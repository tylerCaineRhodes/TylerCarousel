const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3005;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(port, () => {
  console.log(`yo, dude, listen-  you're connected to ${port}`);
})








