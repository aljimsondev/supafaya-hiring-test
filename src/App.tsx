import "./App.css";
import React from "react";
import VanishText from "./Test/VanishText";
import TodoApp from "./Test/TodoApp";
import Timer from "./Test/Timer";
import Form from "./Test/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Challenge 1: Make the paragraph button vanish on click */}
        <VanishText />

        {/* Challenge 2: Make this timer work */}
        <Timer />

        {/* Challenge 3: Todo App */}
        <TodoApp />

        {/* Challenge 4: Submit a form */}
        <Form />
      </header>
    </div>
  );
}

export default App;
