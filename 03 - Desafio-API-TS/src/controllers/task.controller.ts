import type { Request, Response } from "express";
import {
  createTaskSchema,
  createTaskSchemaId,
} from "../../schemas/task.schema.js";
import taskService from "../../services/task.service.js";

// O Controller é a camada de entrada HTTP. Ele:
// 1. Recebe a requisição HTTP
// 2. Valida os dados de entrada
// 3. Extrai os dados validados
// 4. Chama o Service (que tem a lógica)
// 5. Trata o resultado do Service
// 6. Retorna a resposta HTTP

// ==> Criar uma nova Task
export const createTask = (req: Request, res: Response): Response => {
  const resultRequest = createTaskSchema.safeParse(req.body);

  if (!resultRequest.success) {
    return res.status(400).json({
      error: { message: "Dados inválidos" },
    });
  }

  const task = taskService.createTask(resultRequest.data);

  return res.status(201).json({
    message: "Task criada com sucesso!",
    data: task,
  });
};

// ==> Listar Todas as Tasks
export const listTasks = (req: Request, res: Response): Response => {
  const { status, search } = req.query;

  if (search) {
    const resultado = taskService.searchTtitleTasks(search as string);
    return res.status(200).json({
      message: `${resultado.length} tarefa(s) encontrada(s)`,
      resultado: resultado,
    });
  }

  if (status === "concluida" || status === "pendente") {
    const resultado = taskService.filterTasks(status);
    return res.status(200).json({
      message: "Tarefas filtradas com sucesso!",
      resultado: resultado,
    });
  }

  if (status !== undefined) {
    res.status(400).json({
      message: "Status Invalido!",
    });
  }

  const resultado = taskService.listAllTasks();
  return res.status(200).json({
    message: "Tarefas listadas com sucesso!",
    data: resultado,
  });
};

// ==> Completar Task
export const completeTask = (req: Request, res: Response): Response => {
  const getId = createTaskSchemaId.safeParse(req.params);

  if (!getId.success) {
    return res.status(400).json({
      error: { message: "ID não encontrado!, tente novamente." },
    });
  }

  const { id } = getId.data;

  const complete = taskService.completeTask(id);

  if (!complete) {
    return res.status(404).json({
      message: "Não foi possivel encontrar a task",
    });
  }

  return res.status(200).json({
    message: { complete },
  });
};

// ==> Deletar Task
export const deleteTask = (req: Request, res: Response): Response => {
  const getId = createTaskSchemaId.safeParse(req.params);

  if (!getId.success) {
    return res.status(400).json({
      error: { message: "ID não encontrado!, tente novamente." },
    });
  }

  const { id } = getId.data;

  const taskDeletada = taskService.deleteTask(id);

  // tratando resultado
  if (!taskDeletada) {
    return res.status(404).json({
      message: "Não foi possível deletar a task",
    });
  }

  return res.status(200).json({
    message: "Tarefa deletada com sucesso!",
  });
};

// ==> upando dados de uma task
export const updateTask = (req: Request, res: Response): Response => {
  // valida o id
  const getId = createTaskSchemaId.safeParse(req.params);

  if (!getId.success) {
    return res.status(404).json({
      message: "ID não encontrado!",
    });
  }

  // extrai os dados;
  const { id } = getId.data;
  const { title, concluida } = req.body;

  const taskAtualizada = taskService.updateTask(id, { title, concluida });

  // Trata o resultado
  if (!taskAtualizada) {
    return res.status(404).json({
      message: "Task não encontrada, tente novamente.",
    });
  }

  // 5. Retornar sucesso
  return res.status(200).json({
    message: "Task atualizada com sucesso!",
    resultado: taskAtualizada,
  });
};
