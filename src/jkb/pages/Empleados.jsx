import { Typography } from "@mui/material"
import { ListaEmpleados } from "../components/ListaEmpleados"
import { JKBNominaLayout } from "../layout/JKBNominaLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const Empleados = () => {
  return (
    <>
      <JKBNominaLayout >
        {/*<NothingSelectedView/>*/}

        <Typography variant="h3" >Empleados</Typography>
        <ListaEmpleados/>
      </JKBNominaLayout>
    </>
    
  )
}
