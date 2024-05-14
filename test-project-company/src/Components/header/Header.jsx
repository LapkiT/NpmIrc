import React from 'react';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2'
        }
    }
});

const Header = ({ onToggleDrawer }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={onToggleDrawer(true)}><span style={{color: 'white', fontSize: 30}} className="material-symbols-outlined">menu</span></Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
