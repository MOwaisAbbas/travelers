import { useState } from 'react'
import '../../styles/header.css'

import logo from '../../assets/logo.svg'

const navItems = [
    {
        label: 'Home',
        target: 'home'
    },
    {
        label: 'Tours',
        target: 'tours'
    },
    {
        label: 'Destination',
        target: 'destination'
    },
    {
        label: 'About',
        target: 'about'
    },
    {
        label: 'Blogs',
        target: 'blogs'
    },
    {
        label: 'Contact',
        target: 'contact'
    }
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const scrollToSection = (target) => {
        const section = document.getElementById(target)

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }

        setActiveSection(target)
        setMenuOpen(false)
    }

    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <button
                        type="button"
                        className="navbar-logo"
                        onClick={() => scrollToSection('home')}
                        aria-label="Go to home"
                    >
                        <img src={logo} alt="Travilo" />
                    </button>

                    <nav className="navbar-links">
                        {navItems.map((item) => (
                            <button
                                type="button"
                                key={item.target}
                                className={
                                    activeSection === item.target
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => scrollToSection(item.target)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="navbar-actions">
                        <button
                            type="button"
                            className="login-link"
                            onClick={() => scrollToSection('login')}
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="signup-button"
                            onClick={() => scrollToSection('signup')}
                        >
                            Signup
                        </button>
                    </div>

                    <button
                        type="button"
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav">
                        {navItems.map((item) => (
                            <button
                                type="button"
                                key={item.target}
                                className={
                                    activeSection === item.target
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => scrollToSection(item.target)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="mobile-actions">
                        <button
                            type="button"
                            className="login-link"
                            onClick={() => scrollToSection('login')}
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="signup-button"
                            onClick={() => scrollToSection('signup')}
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header