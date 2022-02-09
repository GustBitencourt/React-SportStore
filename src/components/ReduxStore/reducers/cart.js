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
        //verificando se o carrinho esta vazio pra criação de item
        if(state.value === 0) {
            //definindo o item na action
            let item = {
                id: action.product.id_product,
                name: action.product.name_product,
                price: action.product.price,
                image: action.product.image,
                quantity: 1
            }
            // jogando o item pro carrinho
            state.Cart.push(item);

        } else {
            //se o carrinho tiver item
            //vai verificar se o item já está no carrinho
            let check = false;
            //comparando se o item adicionado já esta no carrinho
            state.Cart.map((item, key) => {
                if(item.id === action.product.id_product) {
                    state.Cart[key].quantity++;
                    check = true;
                }
            })
            //se o check for true ele adiciona o item ao carrinho, aumentando sua quantidade
            if (!check) {
                //definindo o item na action
            let item = {
                id: action.product.id_product,
                name: action.product.name_product,
                price: action.product.price,
                image: action.product.image,
                quantity: 1
            }
            // jogando o item pro carrinho
            state.Cart.push(item);
            }

        }
        return{
            //desestruturando o state para conseguir somar a ação no carrinho
            ...state,
            value: ( state.value + 1 )
        }
    }
    return state
}

