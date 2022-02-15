import React, { useState } from 'react'
import Todo from './Todo';

/**
 * Part 1: Generate list (See generate-todo-list-solution-1 )
 * - generats a list from todos array below, with the array-method .map() 
 * - Refactor the code for listItems, into a new child component, may call it 'Todo'
 * - Add a key to every listItem
 *
 * Part 2: Form for adding new todo-items 
 * - Add a form with input field and a button
 * - Create a new state 'task' with default value '', that will be used for the controlled input field
 * - Create a new method handleChange(), that will be used for the controlled input field
 * - Add an onChange method on the controlled input field, that calls the method handleChange()
 * - Add an onSubmit event on the form, that calls the already defined method handleSubmit()
 * 
 * Part 3: Styling
 * - Style the app, using CSS modules
 * 
 * Part 4 (hard): Refactor form
 * - Refactor the code for the form, into a new child component
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */




function TodoApp() {
    const defaultTodos = [
        {id: 1, task: 'Syssla 1'},
        {id: 2, task: 'Syssla 2'},
        {id: 3, task: 'Syssla 3'},
        {id: 4, task: 'Syssla 4'},
        {id: 5, task: 'Syssla 5'}
    ]
    const [todos, setTodos] = useState(defaultTodos);

    const handleSubmit = (e) => {
        e.preventDefault();

        // NOTE! Not the best way to generate a unique ID. 
        // There are libraries that are more suitable for this job
        const randomId = Math.random() * 1000;  

        const newTodo = {id: randomId, task: this.state.task};

        // Using the spread operator to add a new element to an array, 
        // because its not allowed to change the state directly
        // The spread operator returns a new array instead of changing the original one
        setTodos([
            ...todos,
            newTodo
        ])
    }

    return (
        <ul>
            {
                defaultTodos.map( (todo) => (
                    todo.id%2 != 0
                        ? <Todo key={todo.id} todo={todo} addClass="odd" />
                        : <Todo key={todo.id} todo={todo} addClass=""/>
                ))
            }
        </ul>
    )
}

export default TodoApp

