// importacao dos arquivos do react
import * as React from "react";
import { useState } from "react";

// importa os arquivos do MUI
import {
  Grid,
  TextField,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  Switch,
  Box,
  Modal
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


// constante com os valores
const brands = [
  { nome: "Nike", label: "Nike" },
  { nome: "Adidas", label: "Adidas" },
  { nome: "Fila", label: "Fila" },
  { nome: "Vans", label: "Vans" },
  { nome: "Converse", label: "Converse" },
  { nome: "Golf LeFleur", label: "Golf LeFleur" },
  { nome: "Supreme", label: "Supreme" },
];

// constante definindo um estilo
// a ser utilizado
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { 
    lg: 400,
    xs: "70%"
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

//  exportaco da funcao
export default function Forms() {

  // useState para criar as funcao
  // que vao armazenar os valores de
  // nome, telefone, email e marcas

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [marcas, setMarcas] = useState([]);

  // funcao para abrir o modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // funcao para tratar o telefone
  function handleTelefone(e) {
    
    //  regex para permitir somente numeros no campo
    //  seguindo o formato:
    //  2 de 0 a 9 digitos no inicio (ddd)
    //  de 4 a 5 digitos entre entre 0 e 9
    //  e 4 digitos final de 0 a 9
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;

    // constante / funcao que substitui o valor digitado
    // e retorna uma copia de parte do array
    // entre os index do argumento
    let str = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);

    // substitui o valor anterin e
    // formata da maneira desejada
    const result = str.replace(regex, "($1)$2-$3");

    // o resultado acima é o argumento
    // da funcao setState que armazena
    // o valor na variavel  telefone
    setTelefone(result);
  }

  // Switch
  const [state, setState] = useState({
    email: true,
    sms: false,
    whatsapp: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  // funcao para tratar o checbkox
  // das marcas
  const handleMarcas = (event) => {
    const marca = event.target.value;
    const currentIndex = marcas.indexOf(marca);
    const newMarcas = [...marcas];

    if (currentIndex === -1) {
      newMarcas.push(marca);
    } else {
      newMarcas.splice(currentIndex, 1);
    }

    setMarcas(newMarcas);
  };

  // funcao para tratar o formulario
  const handleSubmit = (event) => {
    // evita que o formulario seja enviado
    event.preventDefault();

    // imprime no console as informacoes
    // preenchidas pelo usuario
    console.log(
      "Nome:",
      nome,
      "\n",
      "Telefone:",
      telefone,
      "\n",
      "E-mail:",
      email,
      "\n",
      "Marcas selecionadas: ",
      marcas,
      "\n",
      "Meio de contato selecionados:",
      state
    );

    // define todos os valores
    // preenchidos no campo
    // como valores reais
    setNome("");
    setTelefone("");
    setEmail("");
    setMarcas([]);

    // abre um modal
    // ao ser enviado
    handleOpen()
    
    // notificação após o 
    // formulário ser enviado
    if ("Notification" in window && Notification.permission === "granted") {
      const options = {
        body: "Em breve você receberá as novidades do mundo sneaker",
        icon: "https://i.imgur.com/cVcASRr.png",
      };
      new Notification("Formulário enviado com sucesso!", options);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mb: { xs: 1 } }}
      >
        <Grid item xs={7.5} sm={5} className="inputs">
          <Grid container direction="column">
            <Grid item>
              <TextField
                id="name"
                label="Nome"
                placeholder="Digite seu nome"
                variant="standard"
                required
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="tel"
                label="Telefone"
                placeholder="Digite seu telefone"
                type="text"
                variant="standard"
                inputMode="numeric"
                required
                fullWidth
                value={telefone}
                onChange={handleTelefone.bind(this)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                label="E-mail"
                placeholder="Digite seu melhor e-mail"
                variant="standard"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "15px",
            width: "5px",
            mx: 4,
            height: "180px",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        ></Grid>

        <Grid item xs={12} sm={5} className="select">
          <Grid container direction="column">
            <Grid
              item
              xs={7}
              sm={5}
              sx={{
                mt: {
                  xs: 3,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="p" align="center">
                  Selecione as marcas do seu interesse
                </Typography>
                <Grid
                  container
                  sx={{
                    marginBottom: ".5rem",
                  }}
                >
                  <FormGroup
                    row
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {brands.map((data) => (
                      <FormControlLabel
                        key={data.nome}
                        control={
                          <Checkbox
                            checked={marcas.indexOf(data.nome) !== -1}
                            onChange={handleMarcas}
                            value={data.nome}
                            color="primary"
                          />
                        }
                        label={data.label}
                      />
                    ))}
                  </FormGroup>
                </Grid>

                <FormControl
                  component="fieldset"
                  variant="standard"
                >
                  <Typography variant="p" align="center">
                    Aceito receber informações e promoções por:
                  </Typography>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.email}
                          value="E-mail"
                          onChange={handleChange}
                          name="email"
                        />
                      }
                      label="E-mail"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.sms}
                          value="SMS"
                          onChange={handleChange}
                          name="sms"
                        />
                      }
                      label="SMS"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.whatsapp}
                          value="Whatsapp"
                          onChange={handleChange}
                          name="whatsapp"
                        />
                      }
                      label="Whatsapp"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button
          //  onClick={handleOpen}
            type="submit"
            sx={{
              backgroundColor: "primary.main",
              color: "background.default",
              my: 4,
              borderRadius: "20px",
              width: "200px",
              "&: hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item sm={12} align="center">
            <CheckIcon sx={{color: 'primary.main', border: 3, borderRadius: 25, fontSize: 50, p: 1,}}/>
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: "bold" }} align="center">
            Seus dados foram enviados.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} align="center">
          Em breve você receberá o que há de mais novo no mundo sneakerhead.
          </Typography>
        </Box>
      </Modal>



    </form>

    

  );
}
