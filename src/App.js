import './App.css';
import Navigation from './component/navbar';
import Profile from './component/photos';
import User from './component/user';
import Skills from './component/skills';


function App() {
  return (

    <>
    <Navigation/>
    <div className="App">
    
    <Profile/>
    <User/>
    
    </div>
    <div className='skill'>
    <Skills/>
    </div>
    </>
  );
}

export default App;
