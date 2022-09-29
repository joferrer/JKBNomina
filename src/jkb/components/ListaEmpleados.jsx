import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
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
    <List sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
        {listaEmpleados.map((empleado, index)=>(
            <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar  sx={{ width: 100, height: 100, marginRight: 1}}>J</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h5">{empleado.nombre}</Typography>}
                        secondary={<>
                            <Typography variant="subtitle1">{empleado.correo}</Typography>
                            <Typography variant="subtitle1">{empleado.edad}</Typography>
                            <Typography variant="subtitle1">{empleado.rol}</Typography>
                        </>}
                    />
                     
           
                </ListItem>
                <Divider variant="inset" component="li" />
            </>
            
            )
            
        )}
        
    </List>
  )
}
