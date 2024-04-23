const express = require('express');
const cors = require('cors');
// import { createTodo, updateTodo } from './types.js';
const { createTodo, updateTodo } =  require('./types.js');
const { todo } = require('./db/index.js');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.listen(port);


var num_Requests = 0;

setInterval(() => {
    num_Requests = 0;
    // console.log(num_Requests);
}, 2000)


// Creating a Schema


app.get('/', async (req,res) => {
    const todos = await todo.find({});
    res.json({
        todos,
    })
})

app.post('/todo', async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success)
     {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
     }
     await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
     })

    res.status(200).json({
        msg : "To-Do Created",
    })

    // On Success, Transfer it to Mongo DB
})


app.post('/completed', async (req,res) => {
    const update_Payload = req.body;
    const parsed_Playload = updateTodo.safeParse(update_Payload);
    if(!parsed_Playload.success)
     {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
     }

     await todo.update(
        {
            _id : req.body._id
        }, 
        {
        completed: true,
        }
    )

     res.status(200).json({
        msg : "To-do completed"
     })

    //  On Success, Transfer to MongoDB
})


// (req,res,next) => {
//     if(num_Requests!=0)
//     {
//          num_Requests++;
//          console.log("Incremented")
//     }
//     if(num_Requests==0)
//      {
//         num_Requests = 1;
//         console.log("Set to One");
//      }
    
//      if(num_Requests > 5)
//      {
//       res.status(404).send("Rate - Limiter");
//      }
//      else
//       {
//         next();
//       }
// }, 
  