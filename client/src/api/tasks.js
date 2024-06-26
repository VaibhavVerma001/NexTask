import axios from './axios.js'

export const getTasksRequest = () => axios.get('/tasks');

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTasksRequest = (task) => axios.post('/tasks', task);

export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task);

export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`); //Acá creo que va task._id en el ${}
