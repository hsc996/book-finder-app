import { NavBar } from '../components/Routing/NavBar'

export function Header(){
    return(
        <div className="container">
            <div className="header">
                <NavBar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className='header-title text-capitalize'>Discover your next read.</h2><br />
                    <p>Placeholder blurb</p>
                </div>
            </div>
        </div>
    )
}