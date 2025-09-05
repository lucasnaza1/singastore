import axios from "axios";

const pocoesAPI = axios.create({ baseURL: 'http://localhost:3000/itens' })

async function getPocoes() {
    const response = await pocoesAPI.get('/')

    return response.data
}

export {
    getPocoes
}