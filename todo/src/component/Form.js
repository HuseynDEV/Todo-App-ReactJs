import React from 'react'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const change = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const FormSubmit = (e) => {

        e.preventDefault();
        // if (!editTodo) {
        if (input != '') {
            setTodos([...todos, { title: input, completed: false }])
            console.log(todos)
            setInput('')
        }

    }

    return (
        <form onSubmit={FormSubmit}>
            <input type="text"
                placeholder='Enter a Todo..'
                className='task-input'
                value={input}
                onChange={change} />
            <button className='button-add' type='submit'>Add</button>
        </form>
    )
}

export default Form