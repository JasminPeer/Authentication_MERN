
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
 function PrivateRoute({children}){
  const token =localStorage.getItem('token');
  return token?children:<Navigate to='/login' replace/>
 }
function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<PrivateRoute><Main/></PrivateRoute>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup'element={<Signup/>}/>
  <Route path='*' element={<Navigate to='/' replace/>}/>
  

 </Routes>
 </BrowserRouter>
  );
}

export default App;
