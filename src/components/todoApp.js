import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
    //title estado que queremos obtener y setTitle estado que queremos cambiar
    const [title, setTitle] = useState('hola');

    //Estado de lista de tareas
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        const value = e.target.value;

        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        //Hacemos una copia de todos
        const temp = [...todos];
        //Agregar en una nueva lista los todos
        temp.unshift(newTodo);
        setTodos(temp);
    }


    return (<div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>

            <input onChange={handleChange} className="todoInput" value={title} />
            <input
                onClick={handleSubmit}
                type="submit"
                alue="Create todo"
                className="buttonCreate"
            />

        </form>

        <div className="todosContainer">
            {
                todos.map(item => (
                    <Todo key={ item.id } item = {item} />
                ))
            }

        </div>


    </div>
    );
}