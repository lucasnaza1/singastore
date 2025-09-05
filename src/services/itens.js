import axios from "axios";

const itensAPI = axios.create({ baseURL: 'http://localhost:3000/itens' })

function getItens() {
    const response = itensAPI.get('/')

    return response.data
}

export {
    getItens
}