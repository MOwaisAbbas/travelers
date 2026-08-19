import '../../styles/popular-destinations.css'

import arrow from '../../assets/icons/arrow.svg'
import cappadociaImage from '../../assets/images/packages/cappadocia.jpg'
import grandPalaceImage from '../../assets/images/packages/grandpalace.jpg'
import kelingkingBeachImage from '../../assets/images/packages/kelingkingbeach.jpg'
import padarIslandImage from '../../assets/images/packages/padarisland.jpg'

const destinations = [
    {
        name: 'Kelingking Beach',
        location: 'Nusa Penida, Bali',
        image: kelingkingBeachImage,
        className: 'popular-destinations-card-large'
    },
    {
        name: 'Grand Palace',
        location: 'Bangkok, Thailand',
        image: grandPalaceImage,
        className: 'popular-destinations-card-small'
    },
    {
        name: 'Cappadocia',
        location: 'Turkey',
        image: cappadociaImage,
        className: 'popular-destinations-card-small'
    },
    {
        name: 'Padar Island',
        location: 'East Nusa Tenggara',
        image: padarIslandImage,
        className: 'popular-destinations-card-wide'
    }
]

const PopularDestinations = () => {
    return (
        <section id="destination" className="popular-destinations">
            <div className="container">
                <div className="popular-destinations-header">
                    <span className="popular-destinations-label">Packages</span>

                    <h2 className="popular-destinations-title">
                        Popular Destinations
                    </h2>
                </div>

                <div className="popular-destinations-grid">
                    {destinations.map((destination) => (
                        <article
                            className={`popular-destinations-card ${destination.className}`}
                            key={destination.name}
                        >
                            <img
                                className="popular-destinations-image"
                                src={destination.image}
                                alt={destination.name}
                            />

                            <div className="popular-destinations-overlay">
                                <div className="popular-destinations-info">
                                    <h3 className="popular-destinations-name">
                                        {destination.name}
                                    </h3>

                                    <span className="popular-destinations-location">
                                        {destination.location}
                                    </span>
                                </div>

                                <button
                                    className="popular-destinations-arrow"
                                    type="button"
                                >
                                    <img src={arrow} alt="" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations