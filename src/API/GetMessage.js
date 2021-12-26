import axios from 'axios';

export default class GetMessage{
    static async getAll() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/messages/1')
            return response.data
        } catch(e) {
            console.log('get posts')
            console.log(e)
        }
    }
}