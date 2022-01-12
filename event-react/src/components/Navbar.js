import React, {useState} from 'react'

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false)
    return (
        <nav className={navToggle? "navbar open" : "navbar"}>
        <div className="logo heading">
            <a href="#home">NExUS</a>
        </div>
        <div className="navLinks">
            <ul>
                <a href="#home" className="navLink">
                    <li>
                        Home
                    </li>
                </a>
                <a href="#about" className="navLink">
                    <li>
                        About
                    </li>
                </a>
                <a href="#services" className="navLink">
                    <li>
                        Services
                    </li>
                </a>
                <a href="#contact" className="navLink">
                    <li>
                        Contact
                    </li>
                </a>
            </ul>
        </div>
        <div className="burger" onClick={e=>setNavToggle(!navToggle)}>
            <i className="fas fa-bars"></i>
        </div>
    </nav>
    )
}

export default Navbar
