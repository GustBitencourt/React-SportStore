import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core/';
import Cart from '../Cart';

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3">Sport Store</Typography>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/contato">
        <Button color="primary">Contato</Button>
      </Link>

      <Cart />      
    </Grid>
  );
};

export default Header;
