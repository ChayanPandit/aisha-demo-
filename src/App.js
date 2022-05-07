import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import Mainpage from './Pages/Mainpage';
import Chat from './Pages/Chat';
import SOS from './Pages/sos';
import Community from './Pages/app_comm';
import About from './Pages/About';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

function App() {

  const [userName,setUserName]=useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<><Homepage username={userName} setusername={setUserName} /></>}></Route>
        <Route path='/home' exact element={<><Homepage/></>}></Route>
        <Route path='/mainpage' exact element={<><Navbar/><Mainpage/><Footer/></>}></Route>
        <Route path='/about' exact element={<><Navbar/><About/><Footer/></>}></Route>
        <Route path='/sos' exact element={ <><Navbar username={userName}/><SOS/><Footer/></>}></Route>
        <Route path='/chat' exact element={ <Chat/>}></Route>
        <Route path='/community' exact element={ <Community  />}></Route>

      </Routes>
    </div>
  );
}

export default App;

