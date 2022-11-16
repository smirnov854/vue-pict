import axios from "axios";

axios.defaults.baseURL= 'http://91.211.147.42:7777/api/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')