import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CitizenList from './Components/CitivzenList/CitizenList';
import CitizenCard from './Components/CitizenCard/CitizenCard';
import Dashboard from './Components/Dashboard/Dashboard';
import CustomMain from './Pages/CustomMain';

const App = () => {
  return (
     <Router>
        <Routes>
          <Route path="/" exact element={<CustomMain/>}></Route>
          <Route path="/citizens" element={<CitizenList/>}></Route>
          <Route path="/citizen/:id" element={<CitizenCard/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
