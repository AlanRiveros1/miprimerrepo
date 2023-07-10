import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, tarea: "Tarea 1" },
    { id: 2, tarea: "Tarea 2" },
    { id: 3, tarea: "Tarea 3" },
    { id: 4, tarea: "Tarea 4" }
  ]);

  const tareaRef = useRef();

  const agregarTarea = () => {
    const tarea = tareaRef.current.value;

    if (tarea === "") return;

    setTodos((prevTodos) => {
      const nuevaTarea = {
        id: uuid(),
        tarea: tarea
      };

      return [...prevTodos, nuevaTarea];
    });

    tareaRef.current.value = ""; 
  };

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>
      <div className="input-group mt-4 mb-4">
        <input
          ref={tareaRef}
          placeholder="Ingrese una tarea"
          className="form-control"
          type="text"
        />
        <button onClick={agregarTarea} className="btn btn-success ms-2">
          +
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </Fragment>
  );
}

function TodoItem({ todo }) {
  return (
    <li className="list-group-item">
      {todo.tarea}
      <img
        src="https://picsum.photos/200/300"
        alt="Icon"
        className="ms-2"
        width="25"
        height="25"
      />
    </li>
  );
}