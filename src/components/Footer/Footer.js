import React, { Component } from 'react'


export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text"><span>RFM </span>Community</h1><br />
                        <p>
                            User Documentation<br />
                            Mailing Lists<br />
                            Forum<br />
                            eLearn Platform
                        </p>
                        <div className="contact">
                            <span><i className="fas fa-phone"></i>&nbsp; &#9742; 123-456-7890</span><br />
                            <span><i className="fa fa-envelope"></i>&nbsp; ✉ rfmsuite@gmail.com</span>
                        </div>
                        <div className="socials">
                            <a href="http://www.facebook.com"><i className="fab fa-facebook"></i>✉</a>
                            <a href="http://www.instagram.com"><i className="fab fa-instagram"></i>✉</a>
                            <a href="http://www.twitter.com"><i className="fab fa-twitter"></i>✉</a>
                            <a href="http://www.youtube.com"><i className="fab fa-youtube"></i>✉</a>
                        </div>
                    </div>

                    <div className="footer-section links">
                        <h1 className="logo-text"><span>Our </span>Services</h1><br />
                        <p>
                            RFM Cloud Platform<br />
                            Support<br />
                            Upgrade<br />
                            Find a partner<br />
                            Become a partner<br />
                            Education
                    </p>
                    </div>
                    <div className="footer-section contact-form">
                        <h1 className="logo-text"><span>About </span>Us</h1><br />
                        <p>
                            Our company<br/>
                            Contact<br/>
                            Events<br/>
                            Blog<br/>
                            Customers<br/>
                            Jobs<br/>
                            White Papers<br/>
                            In the press<br/>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    &copy; rfmsuite.com | Designed by Rohit,Jatin,Nihal
            </div>
            </div>
        )
    }
}

export default Footer
