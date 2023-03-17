// importa todos os arquivos do diretorio 'react'
// e da a eles o nome de React
import * as React from "react";

// importa os arquivos do pacote do MUI
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Grid,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";

//cria uma constante que armazena
// a largura do drawer (mobile)
const drawerWidth = 240;

// cria uma constante de array de objeto
// e armazena o texto e o link do menu (appbar)
const navItems = [
  {
    button: {
      text: [
        "Quem Somos",
        "Sneakers",
        "Onde nos encontrar",
        "Fique por dentro",
      ],
      link: [
        "#quem-somos",
        "#sneakers",
        "#onde-nos-encontrar",
        "#fique-por-dentro",
      ],
    },
  },
];

// funcao Header que cria
//a estrutura e renderiza na UI

function Header(props) {
  // pega as informaçoes da
  // window (navegador) e armazena
  const { window } = props;

  // cria a funcao setMobileOpen
  //e armazenar na constante mobileOpen

  // *o React.useState() pode
  // ser substituido somente por useState

  const [mobileOpen, setMobileOpen] = React.useState(false);

  //  funcao para ativar o menu mobile

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // cria a estrtura do menu mobile

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img
          src={require("../../../images/sneakerstore-logo.png")}
          alt="Sneaker Store logo"
          style={{ width: "50%" }}
        />
      </Box>
      <Divider />
      <List>
        {/* 
            // pega os dados informados em navItems
               e itera sobre eles, criando um link
               para cada item do array sem precisar 
               repetir o codigo usando item como argumento
               e novamente usando o map sobre o item
               usando text e index como argumento
               para passar por todos os itens do
               array e seus respectivos textos
               
        */}

        {navItems.map((item) =>
          item.button.text.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component="a"
                href={item.button.link[index]}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))
        )}
        {/* 
            // encerra a
               iteracao 
        */}
      </List>
    </Box>
  );

  //  armazena na constante container a informacao de que
  //  se window for estritamente nao igual a indefinido
  //  retorna uma funcao caso contrario retorna indefinido
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // retorno da funcao Header que cria todo o header e renderiza na UI
  return (
    //  ThemeProvider para usar um tema criado previamente
    //  e que esta declarado ao lado
    
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          elevation={0}
          sx={{
            bgcolor: "background.default",
            borderBottom: 1,
            borderColor: "background.paper",
            height: "100px",
            display: "grid",
            alignItems: "center",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: "none" ,
                '@media (max-width: 803px)': {
                  display: 'block',
                },
                color: "primary.main",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              alignItems="center"
              container
              direction="row"
              sx={{
                '@media (max-width: 803px)': {
                  display: 'none',
                },
              }}>
                <Grid item xs={2} sm={3}>
                <img
                    src={require("../../../images/sneakerstore-logo-horizontal.png")}
                    alt="Sneaker Store logo"
                    style={{ width: "-webkit-fill-available" }}
                  />
                </Grid>
                <Grid item xs={10} sm={9} sx={{ display: "flex", justifyContent: "end"}}>
                {navItems.map((item) => (
                    <Box key={item.button.link}>
                      {item.button.text.map((text, index) => (
                        <Button
                          key={index}
                          sx={{
                            color: "primary.main",
                            border: "none",
                            "&:hover": {
                              background: "transparent",
                              color: "secondary.main",
                            },
                          }}
                          href={item.button.link[index]}
                        >
                          {text}
                        </Button>
                      ))}
                    </Box>
                  ))}
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                // drawerWidth ja foi declarado
                width: drawerWidth,
              },
            }}
          >
            {/* 
              // chamando o componente drawer
              que ja havia sido criado 
          */}
            {drawer}
          </Drawer>
        </Box>
      </Box>
  );
}

// exporta a funcao
export default Header;
