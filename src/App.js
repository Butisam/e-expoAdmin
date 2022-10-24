import { View } from 'react-native-web';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addinfo from './component/addinfo';
import Dashboard from './component/dashboard';
import Login from './component/login';
import Resgister from './component/Resgister';



function App() {
  return (

    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/Resgister" element={<Resgister/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path='/addinfo' element={<Addinfo/>}/>
</Routes>
</BrowserRouter>
    </>

  );
}

export default App;
