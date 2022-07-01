import React from "react";
import { TodoContext } from "../TodoContext";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from '../Modal';

function AppUI() {
  const {
      error,
      loading,
      searchedTodos,
      toggleCompleteTodos,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            {error && <TodosError error={error} />}
            {loading && new Array(4).fill().map((item, index) => <TodosLoading key={index}/>)}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toggleCompleteTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </React.Fragment>
    
      );
  }

  export { AppUI };