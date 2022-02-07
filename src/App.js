import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './routes/routes';

const App = () => {


  return(
    <BrowserRouter>
      <Header />
      <MainRoutes />
    </BrowserRouter>
  )
}

export default App;
