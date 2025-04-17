import React, { useState } from 'react';
import '../css/navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Eda TURAN</div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#about">Hakkında</a>
                <a href="#project">Projelerim</a>
                <a href="#contact">İletişim</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    );
}
