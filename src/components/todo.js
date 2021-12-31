import React, { useState } from 'react';
import { addTodo, removeTodo, editTodo, removeAll } from './../redux/actions/addTodoAction';
import { useDispatch, useSelector } from 'react-redux';

function Todo() {
  const [inputValue, setInputValue] = useState({
    id: '',
    todo: ''
  });
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const list = useSelector(state => state.todo.list)
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here ✌</figcaption>
        </figure>

        <div className="addItems">
          {toggleSubmit ? (
            <>
              <input type="text" placeholder="✍ Edit Item..."
              value={inputValue.todo}
              onChange={(e)=> setInputValue({id:inputValue.id, todo: e.target.value})}
              />
              <i className="fas fa-edit add-btn" title="Edit item" onClick={()=>dispatch(editTodo(inputValue), setInputValue({todo: ''}), setToggleSubmit(false))}></i>
            </>
          ) : (
            <>
              <input type="text" placeholder="✍ Add Items..."
              value={inputValue.todo}
              onChange={(e)=> setInputValue({id: new Date().getTime().toString(), todo: e.target.value})}
              />
              <i className="fas fa-plus add-btn" title="Add Item" onClick={()=>dispatch(addTodo(inputValue), setInputValue({todo: ''}))}></i>
            </>
          ) }
        </div>
        <div className="showItems">
          {list && list.map(elem => (
            <div className="eachItem" key={elem.id} onClick={() => setInputValue({id:elem.id, todo:elem.todo}, setToggleSubmit(true))}>
              <h3>{elem.todo}</h3>
              <div className="todo-btn">
                <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(removeTodo(elem.id))}></i>
              </div>
            </div>
          ))}
        </div>
    
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>dispatch(removeAll())}><span> CHECK LIST </span> </button>
        </div>
    </div>
  </div>
  );
}

export default Todo;
