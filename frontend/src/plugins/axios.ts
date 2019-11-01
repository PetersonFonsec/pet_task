'use strict';

import axios, { AxiosInstance } from 'axios';
import { baseURL } from '../global';

const Axios: AxiosInstance  = axios.create({ baseURL })

Axios.interceptors.response.use(
    (response) => response,
    (error) =>  error
);

export default Axios
