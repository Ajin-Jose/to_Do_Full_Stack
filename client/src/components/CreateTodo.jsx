import React, { useState } from 'react'
import '../styles/createTodo.css'
function CreateTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function AddToDo()
   {
    console.log("Title : " + title);
    console.log("Descriptiom : " + description);

    const request = await fetch("http://127.0.0.1:3000/todo", {
      method : "POST",
      body : JSON.stringify({
        title: title,
        description: description,
        completed: false,
      }),
      headers: {
        "Content-type" : "application/json",
      }
     })
    const json = await request.json();
    console.log("To-Do Added")

   }

  return (
    <div>
        <div id="heading_Container">
                <div>
                    <p>To-Do Lists</p>
                </div>
            </div>

            <div  id="add_To_Do_Container">
                <input  
                  id="title_Input"
                  type="text" 
                  placeholder="Title"
                  onChange={function(e) {
                    setTitle(e.target.value);
                  }}
                >
                </input>

                <input 
                  id="desc_Input" 
                  type="text" 
                  placeholder="Description"
                  onChange={function(e) {
                    setDescription(e.target.value);
                  }}  
                >
                </input>

                <button 
                  id="add_Button"
                  onClick={AddToDo}
                  type="submit"
                >
                Add To-Do
                </button>
            </div>
    </div>
  )
}

export default CreateTodo