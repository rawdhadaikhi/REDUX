export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO  = "DELETE_TODO";
export const EDIT_TODO ="EDIT_TODO";
export const TOGGLE_TODO ="TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

export function addTodo(todo) {
    return {
      type: ADD_TODO,
      payload :todo,   
    }
}


export function deleteTodo(todoId) {
    return {
      type: DELETE_TODO,
      payload :todoId,   
    }
}

export function editTodo(todo) {
    return {
      type: EDIT_TODO,
      payload :todo,   
    }
}

export function toggleTodo(id){
  return{
    type :TOGGLE_TODO,
    payload :id,
  }
}

export function setFilter(todo){
  return{
    type : SET_FILTER,
    payload : todo,
  }
}