import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Profile } from './components/Profile/Profile';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


const App = (props) => {
    return (
        <div className='app-flex'>
            <div className='app-flex-header'>
                <Header />
            </div>
            <div className='app-flex-body'>
                <div><Navigation /></div>
                <div className='app-flex-dialogs app-flex-profile'>
                    <Routes>
                        <Route path='/profile' element={<Profile
                            store={props.store} />} />
                        <Route path='/dialogs' element={<DialogsContainer 
                            store={props.store} />} />
                    </Routes>
                </div>
                
            </div>
        </div>
    );
}

export default App;
