import { combineReducers } from 'redux';
import { todoReducers } from './todoReducers';

const rootReducers = combineReducers({
  todo: todoReducers
});

export default rootReducers;