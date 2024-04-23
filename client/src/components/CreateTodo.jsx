import React from 'react'
import '../styles/createTodo.css'
function CreateTodo() {
  return (
    <div>
        <div id="heading_Container">
                <div>
                    <p>To-Do Lists</p>
                </div>
            </div>

            <div  id="add_To_Do_Container">
                <input  id="title_Input" type="text" placeholder="Title"></input>
                <input id="desc_Input" type="text" placeholder="Description"></input>
                <button id="add_Button" type="submit">Add To-Do</button>
            </div>
    </div>
  )
}

export default CreateTodo