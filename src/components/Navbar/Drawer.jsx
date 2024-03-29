import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const menuItem = [
    {
        id: "1",
        route: "Home",
        pathname: "/",
    },
]

export default function AnchorTemporaryDrawer() {


    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Button sx={{marginTop: '8px'}}><CloseIcon onClick={toggleDrawer('left', false)}/></Button>
            <List>
                {menuItem.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton href={item.pathname}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary={item.route} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
                <React.Fragment>
                    <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{color: 'white'}}></MenuIcon></Button>
                    <Drawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </React.Fragment>
        </div>
    );
}