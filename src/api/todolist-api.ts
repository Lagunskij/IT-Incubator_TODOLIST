import axios from 'axios'




type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'd535c920-572a-4f00-a090-81745ad5a70a'
    }
})


export const todolistAPI = {

    GetTodolists() {
        return instance.get<Array<TodolistType>>(`todo-lists`)
    },

    CreateTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title})
    },
    DeleteTodolist(todolistId: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    }
}

