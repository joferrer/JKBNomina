import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { EmpleadoInfo } from "./EmpleadoInfo"


export const ListaEmpleados = () => {
    const listaEmpleados = [{
        id: 1,
        nombre: 'Jeison Ferrer',
        edad: 22,
        correo: 'jeisonomarfort@ufps.edu.co',
        rol: 'Gerente'


    },
    {
        id: 1,
        nombre: 'Jeison Ferrer',
        edad: 22,
        correo: 'jeisonomarfort@ufps.edu.co',
        rol: 'Gerente'


    },
    {
        id: 1,
        nombre: 'Jeison Ferrer',
        edad: 22,
        correo: 'jeisonomarfort@ufps.edu.co',
        rol: 'Gerente'


    },
    {
        id: 1,
        nombre: 'Jeison Ferrer',
        edad: 22,
        correo: 'jeisonomarfort@ufps.edu.co',
        rol: 'Gerente'


    },{
        id: 1,
        nombre: 'Jeison Ferrer',
        edad: 22,
        correo: 'jeisonomarfort@ufps.edu.co',
        rol: 'Gerente'


    }]
  return (
    <List sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' ,
    display:'flex', flexDirection:'column',alignContent: 'center'}}>
        {listaEmpleados.map((empleado, index)=>(
            <>
                <ListItem  alignItems="center" key={`empleado ${index}`}>
                    <ListItemAvatar>
                        <Avatar  sx={{ width: 90, height: 90, marginRight: 1}}>J</Avatar>
                    </ListItemAvatar>
                    <Box>
                    <Typography variant="h5">{empleado.nombre}</Typography>
                        <List>
                            <ListItem key={`correo ${index}`}>{empleado.correo}</ListItem>
                            <ListItem key={`edad ${index}`}>{empleado.edad}</ListItem>
                            <ListItem key={`rol ${index}`}>{empleado.rol}</ListItem>
                         </List>
                    </Box>
                    
                </ListItem>
                <Divider variant="inset" component="li"  key={`divider ${index}`} />
            </>
            
            )
            
        )}
        
    </List>
  )
}
