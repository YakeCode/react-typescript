import React, { useState } from "react";
import {
  FilterValue,
  TodoTitle,
  type Todo,
  type TodoId,
  type Todo as TodoType,
} from "./types/todo.types";

import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos/Todos";
import { TODO_FILTERS } from "./constants/todoFilters";

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
  const [filterSelected, setfilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

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

  const handleFilterChange = (filter: FilterValue): void => {
    setfilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />
        <Todos
          onToggleComplete={handleComplete}
          onRemoveTodo={handleRemove}
          todos={filteredTodos}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default App;
