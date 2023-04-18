import { useState } from "react";

export default function TodoApp() {
//title estado que queremos obtener y setTitle estado que queremos cambiar
    const [title, setTitle] = useState('hola');

    function handleClick(e){
        e.preventDefault();
        setTitle("Jose")
    }

    return (<div className="todoContainer">
        <form className="todoCreateForm">
            <input className="todoInput" value={title}/>
            <input onClick={handleClick} 
            type="submit" 
            alue="Create todo" 
            className="buttonCreate" 
            />
        
            {title}
        </form>

    </div>
    );
}