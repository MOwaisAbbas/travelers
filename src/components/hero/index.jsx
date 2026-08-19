import '../../styles/hero.css'

import calendarIcon from '../../assets/icons/calender.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import userIcon from '../../assets/icons/icon.svg'
import pinIcon from '../../assets/icons/pin.svg'
import searchIcon from '../../assets/icons/Search.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import heroImage from '../../assets/images/hero/hero.jpg'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div
                    className="hero-banner"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="hero-content">
                        <span className="hero-badge">Feel The Experience</span>

                        <h1 className="hero-title">
                            Explore The
                            <br />
                            Majestic Asia
                            <br />
                            Landscape Now
                        </h1>

                        <button className="hero-button" type="button">
                            Get Started
                        </button>
                    </div>

                    <div className="hero-socials">
                        <a href="#" aria-label="Facebook">
                            <img src={facebookIcon} alt="" />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <img src={twitterIcon} alt="" />
                        </a>

                        <a href="#" aria-label="User">
                            <img src={userIcon} alt="" />
                        </a>
                    </div>

                    <div className="hero-scroll">
                        <span>SCROLL</span>
                        <i />
                    </div>

                </div>
                <form className="hero-search">
                    <div className="hero-search-field">
                        <label htmlFor="hero-destination">Destination</label>

                        <div className="hero-search-input">
                            <input
                                id="hero-destination"
                                type="text"
                                placeholder="Where to go?"
                            />
                            <img src={pinIcon} alt="" />
                        </div>
                    </div>

                    <div className="hero-search-field">
                        <label htmlFor="hero-check-in">Check in</label>

                        <div className="hero-search-input">
                            <input
                                id="hero-check-in"
                                type="text"
                                placeholder="Check in"
                            />
                            <img src={calendarIcon} alt="" />
                        </div>
                    </div>

                    <div className="hero-search-field">
                        <label htmlFor="hero-check-out">Check out</label>

                        <div className="hero-search-input">
                            <input
                                id="hero-check-out"
                                type="text"
                                placeholder="Check out"
                            />
                            <img src={calendarIcon} alt="" />
                        </div>
                    </div>

                    <div className="hero-search-field">
                        <label htmlFor="hero-guests">Guests</label>

                        <div className="hero-search-input">
                            <input
                                id="hero-guests"
                                type="text"
                                placeholder="Guests"
                            />
                            <img src={userIcon} alt="" />
                        </div>
                    </div>

                    <button
                        className="hero-search-button"
                        type="submit"
                        aria-label="Search"
                    >
                        <img src={searchIcon} alt="" />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Hero