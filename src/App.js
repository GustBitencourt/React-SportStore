import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './routes/routes';

import { Container } from '@material-ui/core/';

const App = () => {


  return(
    <Container maxWidth="xl">
      <BrowserRouter>
        <Header />
        <MainRoutes />
      </BrowserRouter>
    </Container>
  )
}

export default App;
