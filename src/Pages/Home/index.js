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

  const categorys = products.map(category => {
    //container vai armazenar as informações de category vinda da store/redux
    const container = { }
    //selecionando categoria que queremos
    container['id'] = category.id_categorys;
    container['name'] = category.name_categorys;

    return container;
  })

                    //transformando categorys em string
  const category = categorys.map(JSON.stringify)
                    //filtrando as informações
                    .filter((item, index, arr) => {
                      //retorno para as categorias não voltarem de maneira múltipla
                      return arr.indexOf(item, index + 1) === -1;
                    })
                    //voltando informações para JSON
                    .map(JSON.parse)

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h5">Categorias</Typography>
          <List>

            { //pegando categorys para dinamizar categoria
              category.map(category => {
                return(
                  <Item 
                    key={category.id} 
                    name={category.name} 
                    //quantidade={category.id} 
                  />
                )
              })
            }

          </List>
        </Paper>
      </Grid>

      <Grid container xs={9} spacing={3} className={classes.root}>

        {/* retornando os produtos vindo da store */}
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

/* Acessando estado global  */
const mapStateToProducts = state => ({
  products: state.products
})

/* o import muda para funcionamento da store na aplicacao com o connect */
export default connect(mapStateToProducts)(Home);
