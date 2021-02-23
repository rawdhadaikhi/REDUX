import React from 'react'
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';
// import {VISIBILITY_FILTERS } from '../redux/states';

function TodoList() {
  const todos = useSelector(state => state)

  // const visibilityFilter = useSelector(state => state.visibilityFilter);
  // const allTodos = useSelector(getTodos);
  // const tod = visibilityFilter === VISIBILITY_FILTERS.ALL
  //     ? allTodos
  //     : visibilityFilter === VISIBILITY_FILTERS.DONE
  //     ? allTodos.filter(tod => tod.done)
  //     : allTodos.filter(tod => !tod.done);

    return (
        <div className="my-3">
           {todos.map((todo) =>{ 
               return <TodoItem  key={todo.id} todo={todo}/>
                })}
           

        </div>
    )
}

export default TodoList
