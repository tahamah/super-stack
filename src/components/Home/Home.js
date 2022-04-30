import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import FourItems from '../FourItems/FourItems'
import ServiceProvide from '../ServiceProvide/ServiceProvide'
import SpecialDeal from '../SpecialDeal/SpecialDeal'
import StockGallery from '../StockGallery/StockGallery'

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceProvide />
            <SpecialDeal />
            <FourItems />
            <StockGallery />
        </div>
    )
}

export default Home
