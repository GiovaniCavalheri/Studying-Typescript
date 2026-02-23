import taskRepository from "../repositories/task.repository.js";
import type {
  CreateTaskDTO,
  Task,
  UpdatedTaskDTO,
} from "../types/task.types.js";

// 🎯 O que NÃO é trabalho do Service:
// ❌ Lidar com req e res → Controller
// ❌ Acessar o banco/array diretamente → Repository
// ❌ Validar formato de dados (Zod) → Middleware/Controller

class TaskService {
  // ==> Criar Tarefa
  createTask(data: CreateTaskDTO) {
    const ID = taskRepository.getNextId();
    const task: Task = {
      id: ID,
      title: data.title,
      concluida: data.concluida,
    };

    return taskRepository.create(task);
  }

  // ==> listar todas as Tasks
  listAllTasks(): Task[] {
    return taskRepository.findAll();
  }

  // ==> task pelo id
  getTaskById(id: number): Task | null {
    const taskByid = taskRepository.findById(id);

    if (!taskByid) {
      return null;
    }
    return taskByid;
  }

  // ==> upar task
  updateTask(id: number, data: UpdatedTaskDTO): Task | null {
    const task = taskRepository.findById(id);

    if (!task) return null;

    if (data.title !== undefined) {
      task.title = data.title;
    }

    if (data.concluida !== undefined) {
      task.concluida = data.concluida;
    }

    return task;
  }

  // => completar task
  completeTask(id: number): Task | null {
    const taskId = taskRepository.findById(id);

    if (!taskId) {
      return null;
    }

    taskId.concluida = true;
    return taskId; 
  }

  // ==> deletar Task
  deleteTask(id: number): boolean {
    return taskRepository.delete(id); 
  }

  // ==> filtrar por status
  filterTasks(status: "concluida" | "pendente"): Task[] {
    const concluida = status === "concluida";
    return taskRepository.filterByStatus(concluida);
  }

  // ==> buscar por titulo
  searchTtitleTasks(termo: string): Task[] {
    return taskRepository.searchByTitle(termo);
  }
}

export default new TaskService();
