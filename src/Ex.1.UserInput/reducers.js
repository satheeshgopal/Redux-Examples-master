import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

export function todos(state = {todolist:[]}, action) {
   switch (action.type) {
       case ADD_TODO:
           state.todolist.push({id:action.id, text:action.text});
           return state;
      default:
         return state
   }
}
const todoApp = combineReducers({
   todos
})
export default todoApp