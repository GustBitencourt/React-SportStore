import productsList from './productsList';

//fazendo o estado do carrinho
const INITIAL_STATE = {
    value: 0,
    product: productsList,
    Cart: []
}

//lembrar de importar pro root reducer
export default function cart(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_TO_CART') {
        return{
            //desestruturando o state para conseguir somar a ação no carrinho
            ...state,
            value: ( state.value + 1 )
        }
    }
    return state
}

