import { Avatar, Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"


export const EmpleadoInfo = ({empleado}) => {
    console.log("AASAS " +empleado)
  return (
    <div>
        <Card sx={{display: 'flex'}}>
            {console.log("AASAS " +empleado)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Avatar
                sx={{ width: 56, height: 56 }}
                
            >J</Avatar>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h2">{empleado.nombre}</Typography>
                <Typography >{empleado.rol}</Typography>
            </CardContent>
            </Box>
        </Card>
        <Divider/>
    </div>
  )
}
