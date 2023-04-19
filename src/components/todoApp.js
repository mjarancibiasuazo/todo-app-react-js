import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';


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

        setTitle("");
    }

    //función para actualizar el titulo de nuestors todos
    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id == id);
        item.title = value;
        setTodos(temp);

    }

    function handleDelete(id){
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