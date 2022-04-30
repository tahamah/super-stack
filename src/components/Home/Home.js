import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import FourItems from '../FourItems/FourItems'
import OurWorkers from '../OurWorkers/OurWorkers'
import ServiceProvide from '../ServiceProvide/ServiceProvide'
import SpecialDeal from '../SpecialDeal/SpecialDeal'

const Home = () => {
    return (
        <div>
            <Banner />
            <FourItems />
            <OurWorkers />
            <ServiceProvide />
            <SpecialDeal />
        </div>
    )
}

export default Home
