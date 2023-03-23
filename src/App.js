import * as React from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./theme/Theme";

// importacao dos componentes
// de forma desestruturada 
// dentro do arquivo index.js
import {
  Header,
  Content,
  Spacing,
  Footer,
  SearchSneaker,
  MapContainer,
  FormContainer,
  Drag
} from "./components";

function App() {

  // faz a solicitação da notificação
  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item>
          <Header />
          <Content />
          <SearchSneaker />
          <Spacing />
          <Drag/>
          <MapContainer />
          <Spacing />
          <FormContainer />
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
