import React from 'react'
import '../styles/todos.css'

function Todos({todos}) {
  return (
    <>
        {todos.map(function(todo) {
            return (    
                <div className="item_Container">
                    <div className="item_Title_Container">
                        <p className="item_Title">{todo.title}</p>
                    </div>
                    <div className="item_Description_Container">
                        <p className="item_Description">{todo.description}</p>
                    </div>
                    <div className="item_Button_Container"> 
                        <button className="item_Button">{todo.completed == true ? "Done" : "Mark as Done"}</button>
                    </div>
                </div>
            )
        })}
    </>

  )
}

export default Todos