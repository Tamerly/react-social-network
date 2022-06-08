import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import './App.css';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
