import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

export default function Todo() {
  let [todoArray, setTodoArray] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  function updateTodoArray(value) {
    setTodoArray((previousArray) => {
      return [...previousArray, { task: value, id: uuidv4() }];
    });
    updateTodo("");
  }

  function updateTodo(value) {
    setNewTodo(value);
  }

  function deleteTodoArray(id) {
    setTodoArray((previousArray) => {
      return previousArray.filter((todo) => todo.id != id);
    });
  }

  function markAsDoneTodo(id) {
    setTodoArray(() => {
      todoArray.map((todo) => {
        if (todo.id == id) {
          todo.isDone = true;
        }
      });
      return [...todoArray];
    });
  }

  return (
    <div className="todo">
      <div className="input-div">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          className="input"
          onChange={(event) => {
            updateTodo(event.target.value);
          }}
          value={newTodo}
        />
        <div
          className="add-button"
          onClick={() => {
            updateTodoArray(newTodo);
          }}
        >
          Add
        </div>
      </div>
      <div className="todo-div">
        <h3 className="todo-title">Todo List</h3>
        <ul className="todo-list">
          {todoArray.map((todo) => (
            <li className="todo-item" key={todo.id}>
              {todo.isDone && (
                <div className="todo-component">
                  <div className="todo-text complete">{todo.task}</div>
                  <div
                    className="icon"
                    onClick={() => {
                      deleteTodoArray(todo.id);
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              )}
              {!todo.isDone && (
                <div className="todo-component">
                  <div className="todo-text">{todo.task}</div>
                  <div
                    className="icon"
                    onClick={() => {
                      markAsDoneTodo(todo.id);
                    }}
                  >
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
