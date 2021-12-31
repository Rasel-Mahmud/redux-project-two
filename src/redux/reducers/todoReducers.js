import { ActionType } from "../types/ActionTypes"
const initState = {
  list: []
}
export const todoReducers = (state = initState, {type, payload}) => {
  switch(type){
    case ActionType.ADD_TODO :
      return {
        ...state,
        list: [...state.list, payload]
      }
    case ActionType.REMOVE_TODO :
      return {
        list: state.list.filter((each) => each.id !== payload)
      }

    case ActionType.CLEAR_ALL :
      return {
        list : []
      }
    case ActionType.EDIT_TODO :
      return {
        ...state,
        list: [...state.list, {...payload,
          todo: payload.todo
        }]
      }
    default :
      return state;
  }
}