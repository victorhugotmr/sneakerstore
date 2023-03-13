//  importa de maneira desestruturada 
//  os itens do pacote do MUI
import { Typography, Grid, Button } from "@mui/material";

// importa um arquivo CSS padrao
import style from "../../../style/style.css";


//  declaracao de exportacao
//  da funcao direto no inicio
export default function Content() {
  return (

    //  MUI permite que algumas propriedades
    //  sejam declaradas de forma inline

    
    <Grid
      container
      id="quem-somos"
      justifyContent="center"
      alignItems="center"
      // background.paper e demais cores
      // foram setados em um arquivo de
      // criacao de tema
      sx={{
        backgroundColor: "background.paper",  
        px: 6.25,
        height: {
          lg: "calc(100vh - 101px)",
          sm: "100%",
        },
      }}
    >
      <Grid item xs={12} lg={6}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            mt: {
              xs: 15,
            },
          }}
        >
          <img //  renderiza a imagem
            src={require("../../../images/sneaker.png")}
            alt="Sneaker Store logo"
            className="hero-Image"
          />
        </Grid>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Typography variant="p" sx={{ mb: 2 }} display="block">
          A <span className="sneaker-name">Sneaker Store</span> é mais que uma
          loja de tênis. É uma criadora de lifestyle. Temos sempre os melhores
          sneakers para o seu dia-a-dia, para o trabalho, para assistir aos
          jogos do seu time favorito, e até para se casar.
        </Typography>
        <Typography variant="p" sx={{ mb: 2 }} display="block">
          Nosso objetivo é colocar o tênis perfeito no pés dos nossos clientes.
          Através de formulários e com uma equipe especializada nós conseguimos
          entender e identificar o gosto do cliente e encontrar o sneaker
          perfeito para ele.
        </Typography>
        <Typography variant="p" sx={{ mb: 2 }} display="block">
          <span className="sneaker-name">Sneaker Store</span> é simples, prático
          e feito para você.
        </Typography>
        <Typography variant="p" sx={{ mb: 2 }} display="block">
          Quer garantir o seu sneaker?
        </Typography>
        <Grid item justifyContent="center" alignItems="center">
          <Button
            href="#sneakers"
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              px: "1rem",
              py: ".5rem",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "secondary.main",
              },
              mb: 8,
            }}
          >
            CLIQUE AQUI
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
