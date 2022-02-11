import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/ReduxStore';
import Header from './components/Header';
import Routes from './routes/routes';

import { Container } from '@material-ui/core/';

const App = () => {
  const localCart = JSON.parse(localStorage.getItem('SportStore: cart'))

  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }

  return(
    <Provider store={store}>
      <Container maxWidth='xl'>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App;
