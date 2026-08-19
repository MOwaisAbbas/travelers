import '../../styles/activities.css'

import adventureIcon from '../../assets/images/activities/adventure.svg'
import cultureIcon from '../../assets/images/activities/culture.svg'
import hikingIcon from '../../assets/images/activities/hiking.svg'
import illustrationBg from '../../assets/images/activities/illustration.svg'
import romanticIcon from '../../assets/images/activities/romantic.svg'

const Activities = () => {
    const categories = [
        { id: 1, name: 'Adventure', icon: adventureIcon },
        { id: 2, name: 'Hiking', icon: hikingIcon },
        { id: 3, name: 'Romantic', icon: romanticIcon },
        { id: 4, name: 'Culture', icon: cultureIcon },
    ]

    return (
        <section id="tours" className="activities">
            <img
                src={illustrationBg}
                alt=""
                aria-hidden="true"
                className="activities-illustration"
            />

            <div className="container">
                <div className="activities-header">
                    <h2 className="activities-title">
                        Pick A Tour Activity
                    </h2>

                    <p className="activities-subtitle">
                        Categories
                    </p>
                </div>

                <div className="activities-grid">
                    {categories.map((category) => (
                        <div
                            className="activity-card"
                            key={category.id}
                        >
                            <div className="activity-icon">
                                <img
                                    src={category.icon}
                                    alt={category.name}
                                />
                            </div>

                            <span className="activity-name">
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Activities