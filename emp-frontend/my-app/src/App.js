import './App.css';
import { Routes,Route} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <Routes>
          <Route path='/' element = {<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          <Route path='/add-employee' element={<AddEmployee/>}></Route>
          <Route path='/edit-employee/:id' element={<AddEmployee/>}></Route>
     </Routes>
     <FooterComponent/> 
    </div>
  );
}

export default App;
