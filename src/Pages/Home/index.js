import { connect } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from "@material-ui/core/";
import Item from "../../components/Item";
import Card from "../../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Home = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h5">Categorias</Typography>
          <List>
            <Item name="Clubes Nacionais" quantidade="5" />

            <Item name="Clubes Internacionais" quantidade="3" />

            <Item name="Camisas Retrôs" quantidade="4" />
          </List>
        </Paper>
      </Grid>

      <Grid container xs={9} spacing={3} className={classes.root}>
        
        {products.map(item => {
          return(
            <Card key={item.id_product} name={item.name_product} price={item.price} urlImg={item.image}>
              {item.name_product}
            </Card>
          )
        })}

      </Grid>
    </Grid>
  );
};

/* Pegando estado global  */
const mapStateToProducts = state => ({
  products: state.products
})

/* o import muda para funcionamento da store na aplicacao com o connect */
export default connect(mapStateToProducts)(Home);
