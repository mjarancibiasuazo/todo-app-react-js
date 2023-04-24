import { useState } from "react";


export default function Todo({ item, onUpdate, onDelete }) {

    //Estado Editar
    const [isEdit, setIsEdit] = useState(false);

    //Componente Formulario Editar
    function FormEdit() {
        
        //Actualizamos el estado
        const [newValue, setNewValue] = useState(item.title);

        //Anulamos el efecto de envio
        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            //Sacamos el valor del input
            const value = e.target.value;
            //Actualizamos el estado
            setNewValue(value);
        }

        //Evento click del botón Update
        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>

                <input 
                type="text" 
                className="todoInput" 
                onChange={handleChange} 
                value={newValue} 
                />

                <button className="button" onClick={handleClickUpdateTodo}>Update</button>

            </form>
        );
    }

    //Componte
    function TodoElement() {
        return (
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
                <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
            </div>
        );
    }

    return (
        <div className="todo">

            {/*Si estoy en modo edit mostrare el FormEdita, si no mostrare TodoElement */}
            {isEdit ? <FormEdit /> : <TodoElement />}</div>

    );

}