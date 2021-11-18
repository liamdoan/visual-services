import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'
import Logo from "../assets/logo-full.png"


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer subscription-heading">
                    Subscribe for our newletters
                </p>
                <p className="footer-subscription-text">
                    Unsubscribe anytime
                </p>

                <div className="input-areas">
                    <form>
                        <input type="email"
                                name="email"
                                placeholder="Email"
                                className="footer-input" />
                        <Button buttonStyle="btn--outline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Clients</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contacts</h2>
                        <Link to='/'>Contacts</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Location</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Video</h2>
                        <Link to='/'>Collaboration</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Commercial</Link>
                        <Link to='/'>Promotion</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <a href='//www.facebook.com' target="_blank">Facebook</a>
                        <a href='//www.instagram.com' target="_blank">Instagram</a>
                        <a href='//www.youtube.com' target="_blank">Youtube</a>
                        <a href='//www.twitter.com' target="_blank">Twitter</a>
                        <a href='//www.linkedin.com' target="_blank">Linkedin</a>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/visual-services-web" target="_blank" className="social-logo">
                            <img className="logo" src={Logo} alt="" /> <span>ABC Photography</span> 
                        </Link>
                    </div>
                    
                    <small className="website-rights">
                        Copyright &copy;{new Date().getFullYear()}&nbsp;
                    </small>
                    
                    <div className="social-icon">
                        <a className="social-icon-link"
                                href="//www.facebook.com"
                                target="_blank"
                                aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="social-icon-link"
                                href="//www.instagram.com"
                                target="_blank"
                                aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="social-icon-link"
                                href="//www.youtube.com"
                                target="_blank"
                                aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a className="social-icon-link"
                                href="//www.twitter.com"
                                target="_blank"
                                aria-label="Twiter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="social-icon-link"
                                href="//www.linkedin.com"
                                target="_blank"
                                aria-label="Linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
