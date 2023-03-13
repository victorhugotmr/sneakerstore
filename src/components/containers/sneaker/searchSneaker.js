// importa react e o hook da pacote
import React, { useState } from "react";

// importa todos os componentes
// necessario do MUI
import {
  Typography,
  Grid,
  InputAdornment,
  Box,
  Modal,
  Button,
  ButtonGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

// importa os dados dos sneakers
import { sneakerData } from "../../../data/sneakersData";

// importa o estilo
import { barStyle } from "../../style/barStyle";

// constante para armazenar
// um estilo que sera usado
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    lg: 700,
    xs: "70%",
  },
  height: {
    xs: "auto",
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: {
    sm: 4,
    xs: 0.5,
  },
};

// exportacao da funcao
export default function Search() {
  // useState para criar a funcao que
  // armazena o valor digitado
  const [search, setSearch] = useState("");

  // useState para criar a funcao
  // que armazena o sneaker selecionado
  const [selectedSneaker, setSelectedSneaker] = useState(null);

  // constante para diminuir
  // a repeticao do codigo
  // serve para tornar o texto digitado
  // em minuscula independente de como esta
  // no teclado
  const lowerSearch = search.toLowerCase();

  // constante que armazena o termo digitado
  // e retorna o termo digitado ou o estado inicial
  const filteredSneaker =
    search.length > 0
      ? sneakerData.filter(
          (data) =>
            data.brand.toLowerCase().includes(lowerSearch) ||
            data.model.toLowerCase().includes(lowerSearch)
        )
      : sneakerData;

  // funcoes para abrir e fechar o modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ao abrir o modal com essa funcao
  // mostra os items selecionados
  const expandModal = (data) => {
    setSelectedSneaker(data);
    handleOpen();
  };

  // fecha o modal dos items selecionados
  const closeModal = () => {
    setSelectedSneaker(null);
    handleClose();
  };

  return (
    <Grid
      container
      id="sneakers"
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
          SNEAKERS
        </Typography>
        <Typography variant="p" color="initial" display="block" align="center">
          Confira alguns dos nossos sneakers disponíveis
        </Typography>
      </Grid>

      <Grid
        container
        item
        justifyContent="center"
        sx={{
          width: "85vw",
          my: 4,
          backgroundColor: "background.default",
          borderRadius: "10px",
          py: 2.5,
          px: {
            sm: 6.25,
            xs: 3.125,
          },
          height: {
            sm: 550,
            xs: "auto",
          },
        }}
      >
        <Grid container direction="row" sx={{ height: 60 }}>
          <Grid
            item
            style={barStyle}
            sx={{
              bgcolor: "white",
              py: 1,
            }}
          >
            <TextField
              id="input-with-icon-textfield"
              fullWidth
              label="Procure por modelo ou marca"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ display: { sm: "flex", xs: "none" } }}
                  >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              // define que o valor do input
              // é o mesmo definido através do setSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
            width: "100%",
            gap: 1,
            mt: 1,
            flexWrap: "nowrap",
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              width: 1,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "secondary.main",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "100%",
            }}
          >
            {/*
                funcao para renderizar os items
                na tela e atualizar a medida que
                o valor for alterado

                uso de ternarios para informar
                ao usuario que caso o termo digitado
                for diferente dos existentes
                retorna um aviso 

                (heuristica de nielsen: informar o status do sistema)
            */}
            {!filteredSneaker == filteredSneaker ? (
              <Box
                align="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography variant="body1" color="initial">
                  Marca ou modelo não encontrado. Tente novamente.
                </Typography>
              </Box>
            ) : (
              // itera sobre os itens renderizando na tela
              filteredSneaker.map((data) => {
                return (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                    key={data.id}
                    sx={{
                      bgcolor: "primary.main",
                      p: "1rem",
                      maxWidth: 230,
                      height: "auto",
                      borderRadius: "15px",
                      my: 1,
                    }}
                  >
                    <Grid
                      item
                      component="img"
                      sx={{
                        width: 200,
                        maxWidth: { xs: 200, md: 150 },
                        borderRadius: "5px",
                        bgcolor: "white",
                      }}
                      // usa como parametros o modelo como id
                      // a url como source da imagem
                      // e o id como key
                      alt={data && data.model}
                      src={data && data.imageURL}
                      key={data && data.id}
                    />
                    <Grid item sx={{ mt: "1rem" }}>
                      <Typography variant="h6" color="white">
                        {/*
                          renderiza a marca
                        */}
                        {data && data.brand}
                      </Typography>
                    </Grid>
                    <Grid item textAlign="center">
                      <Typography variant="p" color="initial">
                        {/*
                          renderiza o modelo
                        */}
                        {data && data.model}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ my: ".5rem" }}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          sx={{
                            p: ".5rem",
                            color: "white",
                            "&:disabled": {
                              bgcolor: "primary.main",
                            },
                          }}
                          disabled
                        >
                          Comprar
                        </Button>
                        <Button
                          sx={{
                            p: ".5rem",
                            color: "white",
                            bgcolor: "secondary.main",
                            "&:hover": {
                              color: "secondary.main",
                              bgcolor: "white",
                            },
                          }}
                          // funcao que abre o modal com o item selecionado
                          onClick={() => expandModal(data)}
                        >
                          Ver mais
                        </Button>
                      </ButtonGroup>
                    </Grid>

                    <Modal
                      open={open}
                      onClose={closeModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Grid container sx={style} row>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          sx={{
                            height: {
                              md: 300,
                              xs: "auto",
                            },
                            overflow: "hidden",
                          }}
                        >
                          {/*
                            container que abre um modal
                            com as informacao do item selecionado
                          */}
                          <Grid
                            sx={{
                              bgcolor: "white",
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Grid
                              item
                              component="img"
                              sx={{
                                height: {
                                  md: "100%",
                                  xs: "auto",
                                },
                                width: {
                                  md: "auto",
                                  xs: "100%",
                                },
                                bgcolor: "#fff",
                                objectFit: "contain",
                              }}
                              alt={selectedSneaker && selectedSneaker.model}
                              src={selectedSneaker && selectedSneaker.imageURL}
                              key={selectedSneaker && selectedSneaker.id}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          justifyContent="center"
                          alignItems="center"
                          xs={12}
                          md={6}
                          sx={{
                            bgcolor: "secondary.main",
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <Typography
                            id="modal-title"
                            variant="h4"
                            sx={{ color: "orange" }}
                            align="center"
                          >
                            {selectedSneaker && selectedSneaker.brand}
                          </Typography>

                          <Typography
                            variant="p"
                            color="initial"
                            sx={{
                              fontWeight: "bold",
                              color: "background.paper",
                            }}
                          >
                            Modelo:
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mb: 2, color: "background.paper" }}
                          >
                            {selectedSneaker && selectedSneaker.model}
                          </Typography>

                          <Typography
                            variant="p"
                            color="initial"
                            sx={{
                              fontWeight: "bold",
                              color: "background.paper",
                            }}
                          >
                            Lançamento:
                          </Typography>
                          <Typography
                            variant="p"
                            color="initial"
                            sx={{ mb: 2, color: "background.paper" }}
                            display="block"
                          >
                            {selectedSneaker && selectedSneaker.release.year}
                          </Typography>

                          <Typography
                            variant="p"
                            color="initial"
                            sx={{
                              fontWeight: "bold",
                              color: "background.paper",
                            }}
                          >
                            Colorway:
                          </Typography>
                          <Typography
                            variant="p"
                            color="initial"
                            sx={{ mb: 2, color: "background.paper" }}
                            display="block"
                          >
                            {selectedSneaker && selectedSneaker.colorway.main}/
                            {selectedSneaker &&
                              selectedSneaker.colorway.details}
                          </Typography>
                          <Typography
                            variant="p"
                            color="initial"
                            sx={{
                              fontWeight: "bold",
                              color: "background.paper",
                            }}
                          >
                            Preço <small>(USD)</small>:
                          </Typography>
                          <Typography
                            variant="p"
                            color="initial"
                            sx={{ mb: 2, color: "background.paper" }}
                          >
                            {selectedSneaker && selectedSneaker.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Modal>
                  </Grid>
                );
              })
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
