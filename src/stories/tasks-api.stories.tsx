import React, {useEffect, useState} from 'react'

import {tasksAPI} from "../api/tasks-api";

export default {
    title: 'API'
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '85390af1-af43-46f3-9e8a-3e7d8f7c9b6b';
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        tasksAPI.GetTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    /*    const [taskTitle, setTaskTitle] = useState<string>('')
        const [todolistId, setTodolistId] = useState<string>("")*/
    useEffect(() => {
        const title = '11111';
        const todolistId = '85390af1-af43-46f3-9e8a-3e7d8f7c9b6b';
        tasksAPI.CreateTask(todolistId, title)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = '140a578c-6cb3-425a-bbe2-a3f79b3a4425';
        const todolistId = '85390af1-af43-46f3-9e8a-3e7d8f7c9b6b';
        tasksAPI.DeleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('title 1')
    const [description, setDescription] = useState<string>('description 1')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadLine, setDeadLaine] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')
/*    useEffect(() => {
        const taskId = '3b9cc478-21b7-4340-b98a-0acc3a07d85e';
        const todolistId = '85390af1-af43-46f3-9e8a-3e7d8f7c9b6b';

        tasksAPI.UpdateTaskTitle(todolistId, taskId,

        })
            .then((res) => {
                setState(res.data)
            })
    }, [])*/
const CreateTask = () => {
    tasksAPI.UpdateTaskTitle(todolistId,taskId, {
        deadline:'',
        description: description,
        priority:priority,
        startDate:'',
        status:status,
        title:title,

    } )
    .then((res) => {
        setState(res.data)
    })
};
    return <div> {JSON.stringify(state)}
    <div>
        <input placeholder={'taskId'} value={taskId} onChange={(e)=>{setTaskId(e.currentTarget.value)}}/>
        <input placeholder={'todolistID'} value={todolistId} onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <input placeholder={'Task title'} value={title} onChange={(e )=>{setTitle(e.currentTarget.value)}}/>
        <input placeholder={'Description'} value={description} onChange={(e )=>{setDescription(e.currentTarget.value)}}/>
        <input placeholder={'status'} value={status} onChange={(e )=>{setStatus(+e.currentTarget.value)}}/>
        <input placeholder={'priority'} value={priority} onChange={(e )=>{setPriority(+e.currentTarget.value)}}/>


        <button onClick={CreateTask}>update task</button>
    </div>
    </div>
}



