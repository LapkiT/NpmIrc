import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CitizenList from './Components/CitivzenList/CitizenList';
import CitizenCard from './Components/CitizenCard/CitizenCard';
import Dashboard from './Components/Dashboard/Dashboard';
import CustomMain from './Pages/CustomMain/CustomMain.jsx';
import {Button, Drawer, List, ListItem, ListItemText} from '@mui/material';
import {useState} from 'react';
import Header from './Components/header/Header.jsx';

const App = () => {
    const [open, setOpen] = useState(false);

    // Функция для переключения состояния Drawer
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const DrawerList = (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Главная страница', 'Добавление пользователя'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

  return (
     <Router>
         <Header open={open} onToggleDrawer={toggleDrawer} />
         <Drawer open={open} onClose={toggleDrawer(false)}>
             {DrawerList}
         </Drawer>
        <Routes>
          <Route path="/" exact element={<CustomMain/>}></Route>
          <Route path="/citizens" element={<CitizenList/>}></Route>
          <Route path="/citizen/:id" element={<CitizenCard/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;