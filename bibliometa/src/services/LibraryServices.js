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
            "firstName": data.name,
            "lastName": data.lastName,
            "alias": data.alias,
            "email": data.email,
            "password": data.password,
            "birth": data.birth

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

export async function postBookUser(user, book) {
    let operacion = "";
    if (book.alquiler === "si") {
        operacion = "Alquiler"
    } else {
        operacion = "Compra"
    }
    try {
        const response = await axios.post(`https://localhost:7188/api/Library/AddBookUser`, {
            "alias": user,
            "title": book.title,
            "author": book.author,
            "year": book.year,
            "status": true,
            "operationType": operacion
        });

        return await response;
    } catch (error) {

    }
}