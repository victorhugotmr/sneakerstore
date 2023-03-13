// importacao dos componentes do MUI
import { Typography, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

// importacao do componente Form
// localizado na pasta declarada
import Form from "../../utilities/form/Form";


// declaracao usando o compontente makeStyles
// para criar um estilo unico para o componente
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    height: {
      lg: '100vh',
      sm: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
    },
  },
}));

// exportaca da funcao
export default function FormContainer() {

  // declarando o funcao useStyles 
  // dentro da constante classes
  const classes = useStyles();

  return (
    <Grid 
      container
      direction="column"
      className={classes.root}
      sx={{bgcolor: 'background.paper', p: 1}}
    >
      <Grid item id="fique-por-dentro">
        <Typography variant="h6" color="initial" align="center">
          FIQUE POR DENTRO
        </Typography>
        <Grid align="center">
        <Typography variant="p" color="initial" align="center">
        Inscreva-se e receba nossa newsletter semanal sobre o mundo sneakerhead
        </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {/* // renderiza o 
              componente na UI 
        */}
        <Form />
      </Grid>
    </Grid>
  );
}