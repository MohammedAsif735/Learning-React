import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';
export default function TodoList(){
    let [todos, setTodos] = useState([{task : "Task", id : uuidv4(), isDone : false} ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((todo) => {
        return ([...todo, {task : newTodo , id : uuidv4()}]);

        })
        console.log(todos);
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    // let deleteTodo = (id) => {
    //     setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));
        
    // };
    // let UpperCaseAll = (id) => {
    //     setTodos((prevTodo) =>
    //      prevTodo.map((todo) => {
    //       if(todo.id === id){
    //         return {
    //             ...todo,
    //             task : todo.task.toUpperCase(),
    //         };
    //         }else{
    //             return todo;
    //         }
    //      })
    //     );
    // };

    let markAsDone = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => {
           if(todo.id == id){
            return {
                ...todo,
                isDone: true,
            };
            }
            return todo;
        })
    );
};
    return (
        <div>
            <input placeholder='add Task' value={newTodo}  onChange={updateTodoValue}/>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) =>(
                    <li key = {todo.id}>
                        <span style={todo.isDone ? {textDecorationLine : "Line-through"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={ () => markAsDone(todo.id)}>mark As Done</button></li>
                ))}
            </ul>
            <button onClick={markAsDone}>mark As done</button>
        </div>
    )
} 