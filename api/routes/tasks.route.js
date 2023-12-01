import express from 'express';
import { addTask, getTasks, deleteTask, updateTask } from '../controllers/task.controller.js';

const router = express.Router();

router.post('/task', addTask); //req sent
router.get('/task', getTasks); //receive
router.put('/task', updateTask); 
router.delete('/task', deleteTask);

export default router;
