import axios from "axios";

const favoritosAPI = axios.create({ baseURL: 'http://localhost:3000/favoritos' })

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

export {
    getFavoritos
}   