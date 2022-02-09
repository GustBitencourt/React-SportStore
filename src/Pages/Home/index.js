import { useSelector } from 'react-redux';
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

const Home = () => {
  //pegando os products
  const products = useSelector(state => state.products);

  const classes = useStyles();

  const categorys = products.map(category => {
    //container vai armazenar as informações de category vinda da store/redux
    const container = { }
    //selecionando categoria que queremos
    container['id'] = category.id_categorys;
    container['name'] = category.name_categorys;

    return container;
  })

  //category para filtrar categorys sem repeticoes - transformando categorys em string
  const category = categorys.map(JSON.stringify)
                    //filtrando as informações
                    .filter((item, index, arr) => {
                      //retorno para as categorias não voltarem de maneira múltipla
                      return arr.indexOf(item, index + 1) === -1;
                    })
                    //voltando informações para JSON
                    .map(JSON.parse);
  
  //pegando quantidade de itens
  //pegando apenas os nomes
  const arrayCategory = categorys.map(category => category.name);
  //contando a quantidade de items por categoria
  //objeto que vai armazenar a quantidade em contador
  let count = { };
  //for contando os items
  for(let i = 0; i < arrayCategory.length; i++) {
    // a chave do objeto será o nome da categoria
    let key = arrayCategory[i];
    //ternario somando as categorias com mesmo nome e fazendo a soma
    count[key] = (count[key] ? count[key] + 1 : 1);
  }

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
                    quantidade={count[category.name]} 
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
          return (
            <Card
              key={item.id_product}
              //id={item.id_product}
              //name={item.name_product}
              //price={item.price}
              //urlImg={item.image}
              product={item}
            >
              {item.name_product}
            </Card>
          );
        })}

      </Grid>
    </Grid>
  );
};

export default Home;
