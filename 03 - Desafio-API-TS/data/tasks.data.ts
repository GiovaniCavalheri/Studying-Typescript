// ==> banco de dados" fake (array)

export interface Task {
    id: number, 
    title: string, 
    concluida: boolean
}

const Tasks: Task[] = [];

export default Tasks; 