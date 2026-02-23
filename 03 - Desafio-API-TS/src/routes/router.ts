import { Router } from "express";
import { completeTask, createTask, deleteTask, listTasks, updateTask } from "../controllers/task.controller.js";

const router = Router();

// CRUD básico
router.get("/tasks", listTasks)           
router.post("/tasks", createTask)         
router.put("/tasks/:id", updateTask)      
router.patch("/tasks/:id", completeTask) 
router.delete("/tasks/:id", deleteTask)   


export default router;
