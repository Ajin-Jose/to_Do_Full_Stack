const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());
app.listen(port);

// Creating a Schema

app.get('/', (req,res) => {

})

app.post('/todo', (req,res) => {

})

app.post('/completed', (req,res) => {

})