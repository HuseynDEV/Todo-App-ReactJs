import React from "react";


const TodoList = ({ input, setInput, todos, setTodos, setEditTodo, editTodo }) => {


    const Deletes = (todo) => {
        let filter = todos.filter((data) => (
            data.title != todo.title
        ))

        setTodos(filter)
    }

    const Complete = (event) => {

        console.log(event.target)
        event.target.parentElement.parentElement.classList.toggle('over')
    }


    const Edit = (data) => {

        const text = todos.filter(item => (
            item.title == data.title
        ))

        setTodos(todos.filter(item => (
            item.title != data.title
        )))

        setInput(text[0].title)
    }

    return (

        < div >
            {
                todos.map((todo, index) => (
                    <li className="todo-list" key={index}>
                        <input
                            id={todo.line}
                            value={todo.title}
                            className="list"
                            onChange={event => event.preventDefault()}
                        />

                        <div className="btns">
                            <i onClick={(e) => Complete(e)} className="fa-solid fa-clipboard-list complete"></i>
                            <i onClick={() => Edit(todo)} className="fa-solid fa-pen-to-square edit"></i>
                            <i onClick={() => Deletes(todo)} className="fa-solid fa-trash delete"></i>
                        </div>

                    </li>
                ))
            }
        </div >
    )
}

export default TodoList