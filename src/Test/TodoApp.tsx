import React from "react";

type Todo = {
  todo: string;
  id: any;
  completed: boolean;
};

function TodoApp() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onAddTodo = () => {
    if (!inputRef.current!.value) return;
    setTodos([
      ...todos,
      {
        todo: inputRef.current!.value,
        id: (Math.random() * 0xffffff).toString(16),
        completed: false,
      },
    ]);
    inputRef.current!.value = "";
    inputRef.current?.focus();
  };

  const removeTodo = (selectedTodo: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== selectedTodo.id));
  };

  const markedTodoCompleted = (selectedTodo: Todo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === selectedTodo.id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-base">
      <div>
        <h1>3. Add to a list</h1>
        <div className="todo-input-base">
          <input className="todo-input" ref={inputRef} placeholder="Todo..." />
          <button onClick={onAddTodo} className="success">
            Add Task
          </button>
        </div>
      </div>
      <ul className="todo-list-base">
        {todos.map((todo, index) => {
          return (
            <li className="todo-list" key={todo.id}>
              <div className="todo">
                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "gray" : "#fff",
                  }}
                >
                  {todo.todo}
                </p>
              </div>
              <span
                className="todo-list-button success"
                onClick={() => markedTodoCompleted(todo)}
              >
                <div className="check"></div>
              </span>
              <span
                className="todo-list-button"
                onClick={() => removeTodo(todo)}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
