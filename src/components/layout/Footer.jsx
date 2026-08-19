import '../../styles/footer.css'

import logo from '../../assets/secondary-logo.svg'

import callIcon from '../../assets/icons/call.svg'
import mailIcon from '../../assets/icons/mail.svg'
import pinIcon from '../../assets/icons/pin2.svg'

import facebookIcon from '../../assets/icons/facebook.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import youtubeIcon from '../../assets/icons/youtube.svg'

import place1 from '../../assets/images/footer/place1.jpg'
import place2 from '../../assets/images/footer/place2.jpg'


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <img
                            className="footer-logo"
                            src={logo}
                            alt="Travilo"
                        />

                        <div className="footer-contact">
                            <p>
                                <img src={pinIcon} alt="" />
                                Awesome Road, New York, USA
                            </p>

                            <p>
                                <img src={callIcon} alt="" />
                                +123 456 789000
                            </p>

                            <p>
                                <img src={mailIcon} alt="" />
                                hello@travilo.com
                            </p>
                        </div>

                        <div className="footer-socials">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="socials bg-[#1877F2]"
                            >
                                <img src={facebookIcon} alt="" />
                            </a>

                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="socials bg-[#3AACF3]"
                            >
                                <img src={twitterIcon} alt="" />
                            </a>

                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="socials bg-[#3291C2]"
                            >
                                <img src={linkedinIcon} alt="" />
                            </a>

                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="socials bg-[#FF5555]"
                            >
                                <img src={youtubeIcon} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <p className="heading">Top Destination</p>

                        <a href="#">New York</a>
                        <a href="#">London</a>
                        <a href="#">Rome</a>
                        <a href="#">Mascot</a>
                        <a href="#">Dhaka</a>
                    </div>

                    <div className="footer-links">
                        <p className="heading">Useful Links</p>

                        <a href="#">About Us</a>
                        <a href="#">Company Profile</a>
                        <a href="#">Team Members</a>
                        <a href="#">Support</a>
                        <a href="#">Career</a>
                    </div>

                    <div className="footer-packages">
                        <p className="heading">Hot Travel Package</p>

                        <div className="place-card">
                            <div className="place-image">
                                <img
                                    src={place1}
                                    alt="Amazon rainforest adventure"
                                />
                            </div>

                            <div className="place-content">
                                <p></p>

                                <p className="place-title">
                                    Adventure trip to Amazon rain forest
                                </p>

                                <p className="place-price">
                                    Starts from{' '}
                                    <span className="highlight">
                                        $399
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="place-card">
                            <div className="place-image">
                                <img
                                    src={place2}
                                    alt="Amazon rainforest adventure"
                                />
                            </div>

                            <div className="place-content">
                                <p></p>

                                <p className="place-title">
                                    Adventure trip to Amazon rain forest
                                </p>

                                <p className="place-price">
                                    Starts from{' '}
                                    <span className="highlight">
                                        $399
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <a href="#">Terms &amp; Condition</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Legal</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer