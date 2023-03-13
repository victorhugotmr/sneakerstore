//  importacao desestruturada
//  dos compontentes do MUI
import { Grid, Typography, Link } from "@mui/material";

//  importacao dos icones
import { Twitter, Instagram, Pinterest } from "@mui/icons-material";

//  declaracao de exportacao
//  da funcao no inicio
export default function Footer() {
  return (
    <Grid
      container
      sx={{
        gap: {
          xs: 4,
          sm: 0,
        },
        py: 6.25,
        backgroundColor: "primary.main",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center " },
        }}
      >
        <Grid>
          <Typography variant="p" color="secondary.main" display="block">
            
            {/* // funcao Date para atualizar o ano automaticamente */}
            Sneaker Store® - {new Date().getFullYear()}
          </Typography>
          <Typography variant="p" color="secondary.main" display="block">
            Todos os direito reservados.
          </Typography>
          <Link
            href="https://github.com/victorhugotmr"
            underline="none"
            color="secondary.main"
            sx={{ "&: hover": { fontWeight: "bold" } }}
          >
            Github
          </Link>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          color: "secondary.main",
        }}
        item
        xs={12}
        sm={4}
      >
        <Grid>
          <Link
            href="#"
            sx={{
              color: "secondary.main",

              //  codigo para estilizar o elemento no hover
              "&: hover": { color: "background.default" },
            }}
          >
            <Instagram />
          </Link>
        </Grid>
        <Grid>
          <Link
            href="#"
            sx={{
              color: "secondary.main",
              "&: hover": { color: "background.default" },
            }}
          >
            <Twitter />
          </Link>
        </Grid>
        <Grid>
          <Link
            href="#"
            sx={{
              color: "secondary.main",
              "&: hover": { color: "background.default" },
            }}
          >
            <Pinterest />
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center " },
        }}
      >
        <Grid>
          <Typography variant="p" color="secondary.main" display="block">
            <Link
              href="#quem-somos"
              underline="none"
              color="primary"
              display="block"
              sx={{
                color: "secondary.main",
                "&: hover": { color: "background.default" },
              }}
            >
              QUEM SOMOS
            </Link>
          </Typography>
          <Typography variant="p" color="secondary.main" display="block">
            <Link
              href="#sneakers"
              underline="none"
              color="primary"
              display="block"
              sx={{
                color: "secondary.main",
                "&: hover": { color: "background.default" },
              }}
            >
              SNEAKERS
            </Link>
          </Typography>
          <Typography variant="p" color="secondary.main" display="block">
            <Link
              href="#onde-nos-encontrar"
              underline="none"
              color="primary"
              display="block"
              sx={{
                color: "secondary.main",
                "&: hover": { color: "background.default" },
              }}
            >
              ONDE NOS ENCONTRAR
            </Link>
          </Typography>
          <Typography variant="p" color="secondary.main" display="block">
            <Link
              href="#fique-por-dentro"
              underline="none"
              color="primary"
              display="block"
              sx={{
                color: "secondary.main",
                "&: hover": { color: "background.default" },
              }}
            >
              FIQUE POR DENTRO
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}