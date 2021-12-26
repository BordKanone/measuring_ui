import axios from 'axios';

export default class GetMessage{
    static async getAll() {
            const response = await axios.get('http://127.0.0.1:8000/messages/1')
            return response.data

    }
}

export const getAll = async () => {
    const response = await axios.get('http://127.0.0.1:8000/messages/1')
    console.log('response from utils', response)
    return response.data
}