// importacao dos componentes do MUI
import React, { useState, useEffect } from "react";
import { Typography, Grid, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

// importacao do hook da localizacao
import useGeoLocation from "../../utilities/customHooks/useGeoLocation";

// importacao do estilo criado
import { barStyle } from "../../style/barStyle";


// exportacao da funcao
export default function Map() {

  // declaracao da funcao na constante location
  const location = useGeoLocation();

  // criando uma variavel com os valores
  // latitude e longitude
  let local = [location.lat, location.lng];

  // usando useState para criar uma funcao
  // que defina o valor do cep
  const [cep, setCEP] = useState("");


  if (location.lat == null && location.lat == null) {
    local = cep;
    console.log("digite o cep");
  } 
  else {
    console.log(
      " latidude: " + location.lat, "\n",
      "longitude: " + location.lng
    );
  }

  // declarando a const url com o link
  //  a ser alterado através de template literals
  const url = `https://maps.google.com/maps?q=${local}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <Grid
      container
      id="onde-nos-encontrar"
      direction="column"
      sx={{
        backgroundColor: "background.paper",
        alignItems: "center",
        justifyContent: "center",
        height: {
          lg: "100vh",
          sm: "100%",
        },
        flexWrap: "nowrap",
      }}
    >
      <Grid item>
        <Typography
          variant="h6"
          display="block"
          color="primary.main"
          align="center"
        >
          PERTINHO DE VOCÊ
        </Typography>
        <Typography variant="p" color="initial" display="block" align="center">
          Ative a localização ou preencha com seu CEP para ver a loja mais
          próxima
        </Typography>
        <Typography
          variant="caption"
          color="initial"
          display="block"
          align="center"
        >
          Para sua segurança não armazenamos nenhum tipo de informação
        </Typography>
      </Grid>

      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        sx={{
          height: {
            sm: 500,
            xs: "auto",
          },
          width: "85vw",
          my: 4,
          backgroundColor: "primary.main",
          borderRadius: "10px",
          gap: 1,
        }}
      >
        <Grid
        container
          direction="row"
          sx={{
            width: "100%",
            py: 2.5,
            px: {
              sm: 6.25,
              xs: 3.125,
            },
          }}
        >
          <Grid
            item
            style={barStyle} // uso do estilo importado
            sx={{
              bgcolor: "white",
              py: 1,
            }}
          >
            <TextField
              id="inputCEP"
              fullWidth
              label="Ative a localização ou digite o CEP"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ display: {sm: "flex", xs: "none" } }}
                  >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              // define o valor como o valor CEP
              value={cep}

              // funcao para definir o valor
              // do CEP no useState
              onChange={(e) => setCEP(e.target.value)}
              sx={{
                width: {
                  sm: "90%",
                  xs: "80%",
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
        container
          direction="row"
          sx={{
            bgcolor: "primary.main",
            height: "calc(100% - 80px)",
            width: "100%",
          }}
        >
          {/* iframe necessario pois o link
              é um embed e precisa ser
              incorporado
          */}
          <iframe
            title="map"
            width="100%"
            height="100%"
            name="map"
            id="gmap_canvas"
            src={url}
            // declarao preterida porem ainda funcional
            frameBorder="0"
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
}
