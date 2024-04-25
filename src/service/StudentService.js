import axios from "axios";

const API_URL = 'http://localhost:8080/api/students';

export const findAllStudents = () => {
    return axios.get(API_URL);

}

export const addNewStudent = (student) => {
    return axios.post(API_URL, student);
}

export const updateStudent =(id, student) => {
    return axios.put(API_URL + "/" + id, student)
}

export const getStudentById =(id) => {
    return axios.get(API_URL + "/" + id);
}

export const deleteStudentById = (id) =>{
    return axios.delete(API_URL + "/" + id);
}

