import { createStore } from 'redux';

//importando raiz de todos os reducers
import rootReducer from './reducers';

//criando estado global
const store = createStore(rootReducer);

export default store;