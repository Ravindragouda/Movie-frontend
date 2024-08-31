import axios from 'axios';

export default axios.create({
    baseURL:'https://004e-2409-408c-9391-f69e-18b7-f7a0-49c-3c8a.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});