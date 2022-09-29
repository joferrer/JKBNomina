
import {List,ListItem,ListItemIcon,ListItemButton,ListItemText} from '@mui/material';
import {MoveToInbox,Mail, Feed, CheckBox, AddTask} from '@mui/icons-material';
import { MouseOverPopover } from './MouseOverPopover';

const iconsList = [  <Feed color='primary' />, <CheckBox color='primary'/> ,<MoveToInbox color='primary' />, <AddTask color='primary'/>];

export const SideBarItemList = ({open}) => {
  return (
    <List >
          {['Empleados', 'Nómina', 'Metricas', 'Crear Encuesta'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <MouseOverPopover text={text} navOpen={open}>
                <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',                    
                  }}
                >
                  {iconsList[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
                </MouseOverPopover>
              
            </ListItem>
          ))}
        </List>
  )
}
