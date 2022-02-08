import {
  Paper,
  Grid,
  Typography,
  List,
  makeStyles,
} from "@material-ui/core/";
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
        <Card name="Flamengo" price="129.90" urlImg="./images/produtos/fla.jpg">
            Flamengo
        </Card>
        <Card name="Milan" price="129.90" urlImg="./images/produtos/milan.jpg">
            Milan
        </Card>
        <Card name="Brasil" price="129.90" urlImg="./images/produtos/brasil.jpg">
            Brasil
        </Card>
        <Card name="Arsenal" price="129.90" urlImg="./images/produtos/arsenal.jpg">
            Arsenal
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
