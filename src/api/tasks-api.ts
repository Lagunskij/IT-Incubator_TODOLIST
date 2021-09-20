import axios from 'axios'




export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}


type GetTaskRespons = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

type ResponseType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export type UpdateTasksType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'd535c920-572a-4f00-a090-81745ad5a70a'
    }
})


export const tasksAPI = {

    GetTasks(todolistId: string) {
        return instance.get<GetTaskRespons>(`todo-lists/${todolistId}/tasks`)
    },

    CreateTask(todolistId: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title})
    },

    UpdateTaskTitle(todolistId: string, taskId: string, model:UpdateTasksType) {
        return instance.put<ResponseType<any>>(`todo-lists/${todolistId}/task/${taskId}`, model)
    },
    DeleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}

