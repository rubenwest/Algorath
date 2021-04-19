import axios from 'axios'

const  baseUrl = 'http://localhost:8080'

export async function getUsers(params) {
    try {
        const response = await axios({
            url: `${baseUrl}/users`,
            method: 'GET'
        })
        return response
    } catch (error) {
        
    }
}

export async function saveUser(userData) {
    try {
        const response = await axios({
            url: `${baseUrl}/users`,
            method: 'POST',
            data: userData
        })
        return response
    } catch (error) {
        console.log(error);
    }
}