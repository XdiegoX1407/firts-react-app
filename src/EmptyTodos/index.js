import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
    const url = "./logo192.png";
    return (
        <div className="EmptyTodos-container">
            <img src={url} alt="logo" />
            <h2>¡Escribe tu primer TODO!</h2>
            <p>Usa el botón <span>➕</span> para añadir nuevos TODOs a la lista</p>
        </div>
    );
};

export { EmptyTodos };