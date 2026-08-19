import '../../styles/newsletter.css'

import plan from '../../assets/icons/paperplane.svg'

const Newsletter = () => {
    return (
        <section id="contact" className="newsletter">
            <div className="container">
                <div className="newsletter-content">

                    <div className="newsletter-text">
                        <p className="newsletter-subtitle">
                            Let's Explore the World
                        </p>

                        <h2 className="newsletter-title">
                            Get Special Offers in
                            <br />
                            Your Inbox
                        </h2>
                    </div>

                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Submit your email"
                        />

                        <button type="submit" aria-label="Subscribe">
                            <img
                                src={plan}
                            />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Newsletter