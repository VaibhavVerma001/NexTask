
import { Router } from "express";
const router = Router();


import { authRequire } from '../middlewares/validateToken.js'


import {
  getTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks
} from '../controllers/tasks.controller.js'


import {validateSchema} from '../middlewares/validator.middleware.js'


import { createTaskSchema } from '../schemas/task.schema.js'


router.get('/tasks', authRequire, getTasks);


router.get('/tasks/:id', authRequire, getTask);


router.post(
  '/tasks', 
  authRequire, 
  validateSchema(createTaskSchema),
  createTasks 
);

router.put('/tasks/:id', authRequire, updateTasks);


router.delete('/tasks/:id', authRequire, deleteTasks);



export default router;