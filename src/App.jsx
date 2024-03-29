import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='*' element={<PageNotFound/>}/>
 
      </Routes>

      <Footer/>
     
    </div>
  );
}

export default App;
