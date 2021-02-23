import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { toggleTodo,deleteTodo, editTodo } from '../redux/actions';

function TodoItem({todo}) {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [description, setDescription] =useState(todo.description);
    return (
        <div className="container-item">
           <div className="row mx-2 align-items-center">
           <div className ="col ">
               {editable ? <input type="text" className="from-control" 
               value={description} 
               onChange ={
                   (e) => setDescription(e.target.value)
               }
               /> :<h4 className ={todo.isDone ? 'done' : undefined}>{todo.description}</h4>}
               
           </div>
           <button className="btn btn-outline-primary m-2"
             onClick = {() =>{
                 dispatch(editTodo(
                    { ...todo,
                     description:description,
                     isDone :false
                    }
                 ));
                 setEditable(!editable);
                 if(editable) {setDescription(todo.description);}

             }}
           >{editable ? "Save" : "Edit"}</button>
           <button className="btn btn-outline-danger m-2"
           onClick = {() =>dispatch(deleteTodo(todo.id))}
           >Delete</button>
           <button  className ={todo.isDone ? "btn btn-warning btn-war" :"btn btn-outline-success" }
           onClick={() => dispatch(toggleTodo(todo.id))}
           
           >{todo.isDone ? "Done"   : "Not Done"}</button>
           </div>
           

        </div>
    )
}

export default TodoItem
