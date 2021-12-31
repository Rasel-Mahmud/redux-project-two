import { ActionType } from './../types/ActionTypes';

export const addTodo = (data) => {
  return {
    type: ActionType.ADD_TODO,
    payload: data
  }
}

export const removeTodo = (id) => {
  return {
    type: ActionType.REMOVE_TODO,
    payload: id
  }
}

export const editTodo = (data) => {
  return {
    type: ActionType.EDIT_TODO,
    payload: data
  }
}

export const removeAll = () => {
  return {
    type: ActionType.CLEAR_ALL,
  }
}