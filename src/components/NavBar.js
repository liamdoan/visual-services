import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './NavBar.css'
import Logo from "../assets/logo-full.png"

  

function NavBar() {

    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect( () => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return ( 
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/visual-services-web" className="navbar-logo" 
                            onClick={closeMobileMenu}>
                            <img className="logo" src={Logo} />
                        {/* ABC Inc. <i className="fab fa-connectdevelop"></i> */}
                    </Link>

                    {/* create the toggle of burger btn */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        {/* if clicked, change the className to 1, clicked again, change to 2 */}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/visual-services-web" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li >
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    {button && <Button des={"/sign-up"} buttonStyle="btn--outline">Sign Up</Button>}
                </div>
            </nav>
        </div>
    )
}

export default NavBar
