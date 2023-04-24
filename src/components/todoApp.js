import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';


export default function TodoApp() {
    //title estado que queremos obtener y setTitle estado que queremos cambiar
    const [title, setTitle] = useState('Escribe un To do');

    //Estado de lista de arreglos de tareas, se inicializa con
    //los corchetes de arreglo
    const [todos, setTodos] = useState([]);

    //Obtenemos el valor del input y accedemos a la props de value.
    function handleChange(e) {
        const value = e.target.value;

        setTitle(value);
    }

    //Anulamos que la página se refresque con el botón de envio.
    function handleSubmit(e) {
        e.preventDefault();

        //Objeto
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        //la variable temp es una copia de todos
        const temp = [...todos];
        //Unshift agrgamos un elemento al inicio de una lista
        temp.unshift(newTodo);
        setTodos(temp);

        //Borrar texto al enviar un elemento a la lista
        setTitle("");
    }

    //función para actualizar el titulo de nuestors todos
    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id == id);
        item.title = value;
        setTodos(temp);

    }

    //Función para eliminar un elemeneto 
    function handleDelete(id) {
        const temp = todos.filter(item => item.id != id);
        setTodos(temp);

    }

    return (<div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>

            <input onChange={handleChange} className="todoInput" value={title} />
            <input
                onClick={handleSubmit}
                type="submit"
                value="Create todo"
                className="buttonCreate"
            />

        </form>

        {/* Mostramos los elementos de la lista.
         la func. map hace un recorrido de todos los elementos y devuelve una
         función.(regresamos una estructura jsx para que react pueda
        renderizar en la pantalla). item es un arreglo de objetos
        que tienen las 3 props(id, title, completed)
        */}

        <div className="todosContainer">
            {
                todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))
            }

        </div>


    </div>
    );
}