export interface Task {
    id: number, 
    title: string, 
    concluida: boolean
}; 


export interface CreateTaskDTO {
    title: string, 
    concluida: boolean
}

export interface UpdatedTaskDTO {
    title?: string, 
    concluida?: boolean
}