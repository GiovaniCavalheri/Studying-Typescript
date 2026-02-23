import Tasks from "../data/tasks.data.js";
import type { Task } from "../types/task.types.js";

// ==> responsavel por: Buscar dados, Adicionar dados, Modificar dados, Deletar dados;

class TaskRepository {
  findAll(): Task[] {
    return Tasks;
  }

  // ==> buscar task pelo id
  findById(id: number): Task | undefined {
    const taskfind = Tasks.find((task) => task.id === id);
    return taskfind;
  }

  // ==> criar task
  create(task: Task): Task {
    Tasks.push(task);
    return task;
  }

  //==> deletar
  delete(id: number): boolean {
    const findTask = Tasks.findIndex((task) => task.id === id);

    if (findTask === -1) {
      return false; // nao deletou
    }

    Tasks.splice(findTask, 1);
    return true; // sucesso
  }

  // ==> Filtrar por status
  filterByStatus(concluida: boolean): Task[] {
    const task = Tasks.filter((task) => task.concluida === concluida);
    

    return task;
  }

  // ==> Procurar por titulo
  searchByTitle(title: string): Task[] {
    const tasksResultado = Tasks.filter((task) =>
      task.title.toLowerCase().includes(title.toLowerCase()),
    );

    return tasksResultado;
  }

  // 7. Gerar próximo ID
  getNextId(): number {
    if (Tasks.length === 0) return 1;

    return Math.max(...Tasks.map((t) => t.id)) + 1;
  }

  update(task: Task): Task {
    return task;
  }
}

export default new TaskRepository();
