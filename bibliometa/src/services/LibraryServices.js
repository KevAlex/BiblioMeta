const axios = require('axios');

export async function getAllUsers() {

    try {
        const response = await axios.get('https://localhost:7188/api/User/GetUsers');
        console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getBookUser(data) {
    try {
        const response = await axios.get('https://localhost:7188/api/Library/GetUserBook', {
            params: {
                "alias": data
            }
        });
        console.log('response  ', response)
        return response;
    } catch (error) {
        return [];
    }
}
export async function postCreateUser(data) {
    try {
        const response = await axios.post(`https://localhost:7188/api/User/CreateUser`, {
            "firstName": "Juan",
            "lastName": "Perez",
            "alias": data.name,
            "email": "string@",
            "password": data.password,
            "birth": "s/s/s"

        });

        return await response;
    } catch (error) {

    }
}

export async function getLoginUser(data) {
    try {
        const response = await axios.get(`https://localhost:7188/api/User/LoginUser`, {
            params: {
                "alias": data.name,
                "pass": data.password,
            }

        });

        return await response;
    } catch (error) {

    }
}

export async function postBookUser() {
    try {
        const response = await axios.post(`https://localhost:7188/api/Library/AddUserBook`, {
            "alias": "string",
            "title": "string",
            "author": "string",
            "year": "string",
            "status": true,
            "operationType": "string"
        });

        return await response;
    } catch (error) {

    }
}