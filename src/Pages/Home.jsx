import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import ServicesComp from "../Components/ServicesComp"
import BlogComp from "../Components/BlogComp"
import AwardsComp from "../Components/AwardsComp"
import LocationsAvailable from "../Components/LocationsAvailable"
import Feedback from "../Components/Feedback"
import Footer from "../Components/Footer"
import PricingComp from "../Components/PricingComp"

const Home = () => {
    return <div className='overflow-x-hidden'>
        <HeroSection />
        <ServicesComp />
        <AwardsComp />
        <LocationsAvailable />
        <Feedback />
        <PricingComp/>
    </div>
}

export default Home