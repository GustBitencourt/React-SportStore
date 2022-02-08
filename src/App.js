import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/ReduxStore';
import Header from './components/Header';
import MainRoutes from './routes/routes';

import { Container } from '@material-ui/core/';

const App = () => {


  return(
    <Provider store={store}>
      <Container maxWidth="xl">
        <BrowserRouter>
          <Header />
          <MainRoutes />
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App;
