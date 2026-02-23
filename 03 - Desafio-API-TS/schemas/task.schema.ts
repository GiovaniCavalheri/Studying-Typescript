// ==> validacao com zod. 
import { z } from "zod"; 

export const createTaskSchema = z.object({
    title: z.string().min(3, "O título precisa ter no mínimo 3 caracteres"),
    concluida: z.boolean()
})

export const createTaskSchemaId = z.object({
  id: z.coerce.number().int().positive("Deve ser um Numero positivo")
});

