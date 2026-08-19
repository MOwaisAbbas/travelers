import { useState } from 'react'
import '../../styles/travel-choice.css'

import pin from '../../assets/icons/pin.svg'
import baliImage from '../../assets/images/destinations/travel-bali.jpg'
import halongImage from '../../assets/images/destinations/travel-halong-bay.jpg'
import kelingkingImage from '../../assets/images/destinations/travel-kelingking.jpg'
import marinaBayImage from '../../assets/images/destinations/travel-marina-bay.jpg'
import bromoImage from '../../assets/images/destinations/travel-mt-bromo.jpg'
import fujiImage from '../../assets/images/destinations/travel-mt-fuji.jpg'
import baganImage from '../../assets/images/destinations/travel-old-bagan.jpg'
import phuketImage from '../../assets/images/destinations/travel-phuket.jpg'

const destinations = [
    {
        name: 'Phuket',
        location: 'Thailand',
        price: '$40',
        image: phuketImage,
        category: 'destination',
        keywords: ['beach', 'island', 'sea', 'thailand', 'nature']
    },
    {
        name: 'Kelingking',
        location: 'Bali, Indonesia',
        price: '$20',
        image: kelingkingImage,
        category: 'destination',
        keywords: ['beach', 'island', 'cliff', 'bali', 'indonesia', 'nature']
    },
    {
        name: 'Mt. Bromo',
        location: 'Indonesia',
        price: '$25',
        image: bromoImage,
        category: 'activity',
        keywords: ['mountain', 'hiking', 'volcano', 'sunrise', 'indonesia', 'adventure']
    },
    {
        name: 'Old Bagan',
        location: 'Myanmar',
        price: '$18',
        image: baganImage,
        category: 'destination',
        keywords: ['temple', 'culture', 'history', 'myanmar', 'heritage']
    },
    {
        name: 'Bali',
        location: 'Indonesia',
        price: '$15',
        image: baliImage,
        category: 'accommodation',
        keywords: ['beach', 'resort', 'island', 'bali', 'indonesia', 'relax']
    },
    {
        name: 'Marina Bay',
        location: 'Singapore',
        price: '$24',
        image: marinaBayImage,
        category: 'accommodation',
        keywords: ['city', 'hotel', 'luxury', 'singapore', 'shopping', 'nightlife']
    },
    {
        name: 'Mt. Fuji',
        location: 'Japan',
        price: '$18',
        image: fujiImage,
        category: 'activity',
        keywords: ['mountain', 'hiking', 'nature', 'japan', 'adventure', 'snow']
    },
    {
        name: 'Halong Bay',
        location: 'Vietnam',
        price: '$25',
        image: halongImage,
        category: 'destination',
        keywords: ['bay', 'island', 'boat', 'sea', 'vietnam', 'nature']
    }
]

const filters = [
    {
        label: 'All View',
        value: 'all'
    },
    {
        label: 'Destination',
        value: 'destination'
    },
    {
        label: 'Accomodation',
        value: 'accommodation'
    },
    {
        label: 'Activity',
        value: 'activity'
    }
]

const TravelChoice = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const filteredDestinations =
        activeFilter === 'all'
            ? destinations
            : destinations.filter(
                (destination) => destination.category === activeFilter
            )

    return (
        <section id="blogs" className="travel-choice">
            <div className="container">
                <div className="travel-choice-content">
                    <header className="travel-choice-header">
                        <h2 className="travel-choice-title">
                            Find Out The Best
                            <span>Travel Choice in Asia</span>
                        </h2>

                        <p className="travel-choice-description">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            <br />
                            commodo ligula eget dolor. Aenean massa.
                        </p>

                        <div className="travel-choice-tabs" role="tablist">
                            {filters.map((filter) => (
                                <button
                                    key={filter.value}
                                    className={`travel-choice-tab ${activeFilter === filter.value
                                        ? 'travel-choice-tab-active'
                                        : ''
                                        }`}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeFilter === filter.value}
                                    onClick={() => setActiveFilter(filter.value)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </header>

                    <div className="travel-choice-grid">
                        {filteredDestinations.map((destination) => (
                            <article className="travel-choice-card" key={destination.name}>
                                <img
                                    className="travel-choice-card-image"
                                    src={destination.image}
                                    alt={destination.name}
                                />

                                <div className="travel-choice-card-overlay">
                                    <div className="travel-choice-card-info">
                                        <div className="travel-choice-card-details">
                                            <h3 className="travel-choice-card-name">
                                                {destination.name}
                                            </h3>

                                            <span className="travel-choice-card-location">
                                                <img
                                                    className="travel-choice-card-pin"
                                                    src={pin}
                                                    alt=""
                                                />
                                                {destination.location}
                                            </span>
                                        </div>

                                        <div className="travel-choice-card-pricing">
                                            <span className="travel-choice-card-start">
                                                Start From
                                            </span>

                                            <strong className="travel-choice-card-price">
                                                {destination.price}
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TravelChoice