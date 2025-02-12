import React, { useState } from 'react'
import "../styles/header.css";






function TODO() {
    const [tododata, setTodoData] = useState([]);
    const [todovalue, settodovalue] = useState("")
    const [editvalue, seteditvalue] = useState("")



    function getTodoValue(event) {
        settodovalue(event.target.value)
    }


    function onSubmitHandle() {
        if (todovalue !== "") {
            const todo = {
                id: new Date().getTime(),
                value: todovalue,
                status: false,
                editable: false
            }
            setTodoData([...tododata, todo])
            settodovalue("")

        } else {
            alert("yout input is empty!")
        }
    }

    function EditTodoHandle(todoId) {
        const editvalue = tododata.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, editable: true }
            }
            return { ...todo, editable: false }

        })

        setTodoData(editvalue)
    }

    function SaveTodoHandle(todoId) {
        const savevalue = tododata.map((todo) => {
            if (todo.id === todoId) {
                if (editvalue !== "") {
                    const edit = editvalue
                    seteditvalue("")
                    return { ...todo, value: edit, editable: false }
                } else {
                    return { ...todo, editable: false }
                }
            }
            else {
                return todo
            }
        })

        setTodoData(savevalue)
    }


    function CompletedTodoHandle(todoId) {
        const completeddata = tododata.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, status: true }
            }
            return todo
        })

        setTodoData(completeddata)
    }


    function CompleteStyle(status) {
        if (status) {
            return { textDecoration: "dashed" }
        }
        return { textDecoration: "none" }

    }


    return (
        <div>
            <div className='container'>
                <h3>Todo Application</h3>
                <div className='input-con container'>
                    <div className="form-floating mb-3">
                        <input value={todovalue} onChange={(e) => getTodoValue(e)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Enter the today's todo</label>
                    </div>
                    <div className='btn-con'>
                        <button onClick={() => onSubmitHandle()} className='btn btn-primary'>Submit Todo</button>
                        {/* <button className='btn btn-danger'>Clear Todo</button> */}
                    </div>
                </div>

                <div className='todo-list container'>
                    {tododata.length === 0 ?
                        <div className='alert alert-light'>
                            <span>Your bucket is empty</span>
                        </div> :
                        <div className='todo-list-con'>
                            {
                                tododata.map((todo) => {
                                    return (
                                        <div key={todo.id} className='alert alert-primary value-con'>
                                            <div className='value'>
                                                {todo.editable ? <div className="">
                                                    {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                                                    <input value={editvalue} onChange={(e) => seteditvalue(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Edit todo" />
                                                </div> : <h5 style={CompleteStyle(todo.status)}>{todo.value}</h5>}



                                            </div>
                                            <div className='action-btn'>
                                                {todo.editable ?
                                                    <button className='btn btn-primary' onClick={() => SaveTodoHandle(todo.id)}>Save Todo</button> :
                                                    <button className='btn btn-dark' onClick={() => EditTodoHandle(todo.id)}>Edit Todo</button>
                                                }
                                                <button className='btn btn-success' onClick={() => CompletedTodoHandle(todo.id)}>Completed Todo</button>
                                                <button className='btn btn-danger'>Delete Todo</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TODO