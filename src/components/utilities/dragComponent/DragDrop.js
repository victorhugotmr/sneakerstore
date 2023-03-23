// importação dos componentes necessários
import { Grid, Typography } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";


// declaração da constante sendo uma
//  arrow function de argumento imagem e titulo
const SneakerContainer = ({ image, title }) => {
  return (
    <Grid
      key={title}
      textAlign="center"
      sx={{
        display: "grid",
        placeItems: "center",
        bgcolor: "secondary.main",
        px: .15,
        height: {
          md: "auto",
          xs: "auto"
        },
        width: "auto",
        borderRadius: 3,
        overflow: "hidden",
        border: 2,
        borderColor: 'transparent',
        transition: 'background-color .5s ease-out, border .3s ease-out',
        '&:hover': {
          bgcolor: 'primary.main',
          borderColor: 'secondary.main',
          transform: 'scale(1.03)',
          cursor: 'grab'
        }
      }}
    >
      <img src={image} alt={title} key={title} style={{ width: "100%", height: "auto"}} />
      <Grid
        container
        sx={{
          display: 'grid',
          placeItems: "center",
          mb: 1.25,
          fontWeight: "bold",
          height: '90px',
          color: "white"
        }}
      >
        <Grid item sx={{alignSelf: 'start', p: .5}}>
          <Typography variant="p" color="white">
            {title}
          </Typography>
        </Grid>
        <Grid item sx={{alignSelf: 'end'}}>
          <DragHandleIcon/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SneakerContainer;
