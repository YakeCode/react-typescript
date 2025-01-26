import React, { useState } from "react";
import {
  type Todo,
  type TodoId,
  type Todo as TodoType,
} from "./models/Todo-model";

import { Todos } from "./components/Todos";

const mockTodos: Todo[] = [
  {
    id: "1",
    title: "Todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    completed: true,
  },
];

const App = (): React.ReactElement => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleComplete = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoapp">
        <Todos
          onToggleComplete={handleComplete}
          onRemoveTodo={handleRemove}
          todos={todos}
        />
      </div>
    </>
  );
};

export default App;
