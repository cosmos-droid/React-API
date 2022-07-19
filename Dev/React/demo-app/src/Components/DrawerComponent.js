import { Drawer,List,ListItem,ListItemButton,ListItemIcon,InboxIcon,MailIcon,ListItemText } from "@mui/material";



const DrawerComponent = () =>
{



return(
        <div>
            <Drawer variant="permanent" anchor="left">
                <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
            </Drawer>
        
        </div>
            
)

};

export default DrawerComponent;