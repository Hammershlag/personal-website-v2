import { useRef, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import '../../App.css';
import logo from '../../static/logo1024.png';
import NavButton from "../navButton/NavButton";

function Navbar(props) {
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (event, href) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        const navHeight = navRef.current.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        props.setLastVisible(href.substring(1))

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className={styles.Nav} ref={navRef}>
                <div className={styles.LeftSection}>
                    <div className={styles.Logo}>
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className={styles.Name}>
                        <span className="Hoverable">Tomasz</span>
                        <span className="Hoverable">Zbroszczyk</span>
                    </div>
                </div>

                <div className={styles.RightSection}>
                    {isDesktop ? (
                        <div className={`${styles.Links} ${styles.Desktop}`}>
                            <NavButton href="#about" text="About" onClick={handleScroll} active={props.lastVisible === 'about'}/>
                            <NavButton href="#skills" text="Skills" onClick={handleScroll} active={props.lastVisible === 'skills'}/>
                            <NavButton href="#portfolio" text="Portfolio" onClick={handleScroll} active={props.lastVisible === 'portfolio'}/>
                            <NavButton href="#contact" text="Contact" onClick={handleScroll} active={props.lastVisible === 'contact'}/>
                        </div>
                    ) : (
                        <div className={`${styles.Mobile}`} ref={menuRef}>
                            <div className={styles.MenuToggleIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <span className={`${styles.TopLine} ${styles.Line} ${isMenuOpen ? styles.MenuToggleIconOpen : ""}`}/>
                                <span className={`${styles.MiddleLine} ${styles.Line} ${isMenuOpen ? styles.MenuToggleIconOpen : ""}`}/>
                                <span className={`${styles.BottomLine} ${styles.Line} ${isMenuOpen ? styles.MenuToggleIconOpen : ""}`}/>
                            </div>
                            <div className={`${styles.Menu} ${isMenuOpen ? styles.MenuOpen : ""}`}>
                                <NavButton href="#about" text="About" onClick={handleScroll} active={props.lastVisible === 'about'}/>
                                <NavButton href="#skills" text="Skills" onClick={handleScroll} active={props.lastVisible === 'skills'}/>
                                <NavButton href="#portfolio" text="Portfolio" onClick={handleScroll} active={props.lastVisible === 'portfolio'}/>
                                <NavButton href="#contact" text="Contact" onClick={handleScroll} active={props.lastVisible === 'contact'}/>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <div style={{height: '100px', width: '95vw'}}/>
        </>
    );
}

export default Navbar;