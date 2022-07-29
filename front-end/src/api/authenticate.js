import axios from "./axios";
export const registerAPI = async (registerForm) => {
    
        const response = await axios.post('/register', registerForm);
        return response.data;
    
    }
    export const loginAPI = async (loginForm) => {
    
        const response = await axios.post('/login', loginForm);
        return response.data;
    
    }
