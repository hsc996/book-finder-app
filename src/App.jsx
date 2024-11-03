import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/Routing/NavBar';

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* <NavBar /> */}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;