import { async } from '@firebase/util';

const axios = require('axios');

export async function getAllUsers() {

    try {
        const response = await axios.get('https://localhost:7188/api/User/GetUsers');
        console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
    // try {
    //     const actualData = fetch(`https://localhost:7188/api/User/GetUsers`)
    //         .then((response) => response.json())
    //         .then((actualData) => console.log(actualData));

    //     return await actualData;

    // } catch (error) {
    //     return [];
    // }

}

export async function getBookUser() {
    try {
        const response = await axios.get('https://localhost:7188/api/Library/GetUserBook');
        console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}
export async function postCreateUser(data) {
    try {
        const response = await axios.post(`https://localhost:7188/api/User/CreateUser`, {
            "firstName": "Juan",
            "lastName": "Perez",
            "alias": "Jua",
            "email": "string@",
            "password": "ng",
            "birth": "s/s/s"

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
export async function postLoginUser(data) {
    try {
        const response = await axios.post(`https://localhost:7188/api/User/LoginUser`, {

            "alias": "Jua",
            "password": "ng",
        });

        return await response;
    } catch (error) {

    }
}