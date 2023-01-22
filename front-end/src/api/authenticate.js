import axios from "./axios";
export const registerAPI = async (registerForm) => {
    
        const response = await axios.post('/register', registerForm);
        return response.data;
    
    }
export const loginAPI = async (loginForm) => {
    
        const response = await axios.post('/login', loginForm);
        return response.data;
    
    }
export const updateAPI = async (updateForm,id) => {

    const response = await axios.put('/push/'+id, updateForm,id);
    return response.data;

}
export  const updateperformanceAPI = async (updateForm,id) => {

    const response = await axios.put('/updateperformance/'+id, updateForm,id);
    console.log(updateForm)

}
