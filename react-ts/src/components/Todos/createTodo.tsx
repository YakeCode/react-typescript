import React, { useState } from "react";
import { type TodoTitle } from "../../types/todo.types";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, SetInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({ title: inputValue });
    SetInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          SetInputValue(e.target.value);
        }}
        onKeyDown={() => {}}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  );
};
