import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll =() => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        //Navigation bar
 
        <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
            <Container>
            {/* <Navbar.Brand href="#home">
                <img src={logo} alt="logo"></img>
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggeler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className ={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#education" className ={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                <Nav.Link href="#contact" className ={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className= "social-icon">
                        <a href="https://www.linkedin.com/in/mj-estepanie-palo-a52aa9287/" ><img src={navIcon1} alt="" /> </a>
                        <a href="https://web.facebook.com/profile.php?id=100021938712341" ><img src={navIcon2} alt="" /> </a>
                        <a href="https://www.instagram.com/emenemjjj/" ><img src={navIcon3} alt="" /> </a>
                    </div>
                    <button className="vvd"><span>Let's connect</span></button>
                </span>
            </Navbar.Collapse>    
            </Container>
        </Navbar>
       
    )
}