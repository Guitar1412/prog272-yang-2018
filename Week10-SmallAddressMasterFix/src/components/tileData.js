import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import MapIcon from '@material-ui/icons/Map';
//import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/">
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>

        <ListItem
            button
            component={Link}
            to="/Address">
            <ListItemIcon>
                <MapIcon/>
            </ListItemIcon>
            <ListItemText primary="Address"/>
        </ListItem>

        <ListItem
            button
            component={Link}
            to="/init-db">
            <ListItemIcon>
                <FolderIcon/>
            </ListItemIcon>
            <ListItemText primary="InitDB"/>
        </ListItem>
    </div>
);