import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodos,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onSubmitValue = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onAdd = (event) => {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO...</label>
            <textarea
                value={newTodoValue}
                onChange={onSubmitValue}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
};

export { TodoForm };