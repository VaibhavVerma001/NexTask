// Importar el archivo con la configuración de axios.
import axios from "./axios.js";

// Crea una constante, toma como parametro user y realiza la petición post con el usuario.
export const registerRequest = user => axios.post(`/register`, user);

export const loginRequest = user =>  axios.post(`/login`, user); 

// Peticion get al backend
export const verifyTokenRequest = () => axios.get('/verify'); 
