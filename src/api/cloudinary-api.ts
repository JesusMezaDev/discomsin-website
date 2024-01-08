import axios from 'axios';

export const discomsinApi = axios.create({
    baseURL: `${ import.meta.env.MY_API_URL }/api`,
});