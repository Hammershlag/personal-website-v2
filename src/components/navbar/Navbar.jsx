import { useRef } from 'react';
import styles from './Navbar.module.css';
import '../../App.css';
import logo from '../../static/logo1024.png';
import NavButton from "../navButton/NavButton";

function Navbar() {
    const navRef = useRef(null);

    const handleScroll = (event, href) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        const navHeight = navRef.current.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

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

                <div className={styles.LeftSection}>
                    <div className={`${styles.Links} ${styles.Desktop}`}>
                        <NavButton href="#about" text="About" onClick={handleScroll}/>
                        <NavButton href="#skills" text="Skills" onClick={handleScroll}/>
                        <NavButton href="#portfolio" text="Portfolio" onClick={handleScroll}/>
                        <NavButton href="#contact" text="Contact" onClick={handleScroll}/>
                    </div>

                    <div className={`${styles.Mobile}`}>
                        <input type="checkbox" id="menu-toggle" className={styles.MenuToggleCheckbox}/>
                        <label htmlFor="menu-toggle" className={styles.MenuToggle}>
                            <div className={styles.Hamburger}>lalala</div>
                        </label>
                        <div className={styles.Menu}>
                            <NavButton href="#about" text="About" onClick={handleScroll}/>
                            <NavButton href="#skills" text="Skills" onClick={handleScroll}/>
                            <NavButton href="#projects" text="Projects" onClick={handleScroll}/>
                            <NavButton href="#contact" text="Contact" onClick={handleScroll}/>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{height: '100px', width: '100vw'}}/>
        </>
    );
}

export default Navbar;