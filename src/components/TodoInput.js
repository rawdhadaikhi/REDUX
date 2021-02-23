import React, { useState } from 'react'
import { addTodo } from '../redux/actions';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';

function TodoInput() {
     const [description, setDescription] =useState();
     const dispatch = useDispatch();
    return (
        <div>
            <div className ="row m-2">
                <input  type ="text"
                 className="col form-control"
                 onChange ={(e) => setDescription(e.target.value)}
                 value={description} />

                <button  onClick ={() =>{
                          dispatch(addTodo(
                                {id:uuidv4(),
                                   description:description,
                                   isDone:false }
                                   ))
                           setDescription("");
                        }
                    }
                       className="btn btn-primary mx-2">Add</button>
                       <select className="form-select select">
                           <option>All</option>
                           <option>Done</option>
                           <option>Undone</option>
                       </select>
            </div>
        </div>
    )
}

export default TodoInput;
