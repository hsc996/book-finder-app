import { NavBar } from '../components/Routing/NavBar';
import '../styles/Header.css'
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

export function Header({ onSearch }){
    return(
        <div className="container">
            <div className="header">
                <NavBar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className='header-title text-capitalize'>Discover your next read.</h2><br />
                    <p>Placeholder blurb</p>
                    <SearchBar onSearch={onSearch}/>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
}