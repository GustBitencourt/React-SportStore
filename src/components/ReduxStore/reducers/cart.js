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
        //definindo o item na action
        let item = {
            id: action.product.id_product,
            name: action.product.name_product,
            price: action.product.price,
            image: action.product.image
        }
        // jogando o item pro carrinho
        state.Cart.push(item);
        return{
            //desestruturando o state para conseguir somar a ação no carrinho
            ...state,
            value: ( state.value + 1 )
        }
    }
    return state
}

