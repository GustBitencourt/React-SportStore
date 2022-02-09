import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core/';

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3">Dio Shopping</Typography>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/contato">
        <Button color="primary">Contato</Button>
      </Link>

      
    </Grid>
  );
};

export default Header;
