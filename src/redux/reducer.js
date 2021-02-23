
import {ADD_TODO,DELETE_TODO,EDIT_TODO,SET_FILTER,TOGGLE_TODO} from './actions';
import { todos } from './states';

export const reducer = (state = todos ,action) =>{
    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload];
        
         case DELETE_TODO:
          let newTodos = [...state];
           newTodos = newTodos.filter(todo =>todo.id != action.payload);
           return newTodos;

         case EDIT_TODO:
           let edittodo =[...state];
           let index = -1;
           for(let i =0; i<edittodo.length;i++){
               index++;
               if(edittodo[i].id == action.payload.id){
                       break;
               }
           }
           if(index != -1) {
               edittodo[index] = action.payload;
    
           }
            return edittodo;
        
        case TOGGLE_TODO:
         return state.map(el =>el.id === action.payload ? {...el,isDone: !el.isDone} :el);

         case SET_FILTER:
             return action.payload;
    
        default:
           return state;
    }
}