import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import  '../Styles/Navbar.css';
const useStyles = makeStyles({
    list: {
        backgroundColor:"black",
        opacity:".9",
        width:"auto",
        height:"100%"
    },
    drawerList:{
        textDecoration:"none",
        color:"white",
    },
    menu:{
       fontSize:"3rem",
       color:"white"
    }
});

export default function NavBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
            <Link className={classes.drawerList} to="/">
              <ListItem>
                      <ListItemIcon><HomeIcon className={classes.drawerList}></HomeIcon></ListItemIcon>
                        <ListItemText> Home</ListItemText>
              </ListItem>
            </Link>
            </List>
            <List>
                <Link className={classes.drawerList} to="/about">
                    <ListItem>
                        <ListItemIcon><PersonIcon className={classes.drawerList}></PersonIcon></ListItemIcon>
                        <ListItemText> About</ListItemText>
                    </ListItem>
                </Link>
            </List>
            <List>
                <Link className={classes.drawerList} to="/projects">
                    <ListItem>
                        <ListItemIcon><AppsIcon className={classes.drawerList}></AppsIcon></ListItemIcon>
                        <ListItemText> Projects</ListItemText>
                    </ListItem>
                </Link>
            </List>
     </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><ArrowForwardIosIcon className={classes.menu}></ArrowForwardIosIcon><span className={classes.menu}>|</span></Button>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
            
        </div>
    );
}
