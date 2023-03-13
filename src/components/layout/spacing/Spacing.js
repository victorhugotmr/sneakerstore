// importacao do componente do MUI

import { Grid } from "@mui/material"

//  declaracao de exportacao 
//  da funcao no inicio

export default function Spacing() {
  return (
    
    <Grid container
      sx={{
        height: '100%',
        py: 6.25,
        bgcolor: 'background.paper',
      }}>
      <Grid item 
      sx={{
        width: {
          sm: 500,
          xs: 250,
        },
        height: "5px",
        backgroundColor: "primary.main",
        mx: 'auto',
        borderRadius: '15px'
      }}>

      </Grid>
    </Grid>
  )
}

