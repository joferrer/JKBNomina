import { Button, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { ListaEmpleados } from "../components/ListaEmpleados"
import { JKBNominaLayout } from "../layout/JKBNominaLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const Empleados = () => {
  return (
    <>
      <JKBNominaLayout >
        {/*<NothingSelectedView/>*/}
        <Box sx={{display:'flex' , justifyContent:'space-between' , alignContent:'center'}}>
          <Typography variant="h3" >Empleados</Typography>
          <Button variant="contained">Agregar empleado</Button>

        </Box>
        
        <ListaEmpleados/>
      </JKBNominaLayout>
    </>
    
  )
}
