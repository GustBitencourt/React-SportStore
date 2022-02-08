import productsList from './productsList';

//productsList é uma "banco de dados"
const PRODUCT = productsList;

//função recebendo os produtos como estado, retornando os produtos.
export default function products(state = PRODUCT) {
    return state;

}

