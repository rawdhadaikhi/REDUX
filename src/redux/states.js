 import {v4 as uuidv4} from 'uuid';

export let todos =[
    {
        id :uuidv4(),
        description :"learn react",
        isDone :false
    },
    {
        id :uuidv4(),
        description :"learn node",
        isDone :false
    },
    {
        id :uuidv4(),
        description :"learn redux",
        isDone :false
    }
]

export const VISIBILITY_FILTERS = {
    ALL: "all",
    DONE: "done",
    UNDONE: "undone"
  }
