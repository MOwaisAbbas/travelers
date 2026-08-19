import Activities from "../components/activites"
import TravelChoice from "../components/destinations"
import Hero from "../components/hero"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Newsletter from "../components/newsletter"
import PopularDestinations from "../components/packages"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <PopularDestinations />
            <Activities />
            <TravelChoice />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home