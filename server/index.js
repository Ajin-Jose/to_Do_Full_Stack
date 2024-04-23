const express = require('express');
// import { createTodo, updateTodo } from './types.js';
const { createTodo, updateTodo } =  require('./types.js');

const port = 3000;

const app = express();
app.use(express.json());
app.listen(port);



// Creating a Schema

app.get('/', (req,res) => {

})

app.post('/todo', (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success)
     {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
     }

    // On Success, Transfer it to Mongo DB
})


app.post('/completed', (req,res) => {
    const update_Payload = req.body;
    const parsed_Playload = updateTodo.safeParse(update_Payload);
    if(!parsed_Playload.success)
     {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
     }

    //  On Success, Transfer to MongoDB
})