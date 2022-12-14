import { getToken } from "../constant/Constant"
import { ApiRoute } from "../routes/ApiRoutes"
import { API_URL } from "./Url"

export const signup = async (signup_data) => {
    const postHeader = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup_data)
    }
    console.log(signup_data)

    const response = await fetch(`${API_URL.AUTH_URL}${ApiRoute.auth_signup}`, postHeader)

    return await response.json();
}


export const login = async (login_data) => {
    const postHeader = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login_data)
    }
    const response = await fetch(`${API_URL.AUTH_URL}${ApiRoute.auth_login}`, postHeader)
    return await response.json();
}


export const getAllEmployee = async () => {
    const getHeader = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.get_all_employee}`, getHeader)
    return await response.json()
}


export const addEmployee = async (employee_data) => {
    const postHeader = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee_data)
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.add_employee}`, postHeader)
    return await response.json();
}


export const updateEmployee = async (id , updateData) => {
    console.log(id,updateData)
    delete updateData._id
    const postHeader = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.update_employee}/${id}`, postHeader)
    return await response.json();
}

export const loadUser = async (id) => {
console.log(id,getToken())
    const getHeader = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.single_employee}/${id}`, getHeader)
    console.log(response)
    return await response.json()
}

export const deleteEmployee = async (id) => {
    console.log(id,getToken())
        const deleteHeader = {
            method: 'Delete',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.delete_employee}/${id}`, deleteHeader)
        console.log(response)
        return await response.json()
    }