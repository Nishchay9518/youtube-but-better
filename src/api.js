import axios from 'axios';

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params: {
        key:"AIzaSyCobXu-wQXBUDTXEJ1K9ltOUfb-WXMiuF4",
    }
})

export default request

