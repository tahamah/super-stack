import React from 'react'
import useInventoriesData from '../../hooks/useInventoriesData'

import FourItems from '../FourItems/FourItems'
import Header from '../Header/Header'
import SpecialDeal from '../SpecialDeal/SpecialDeal'
import Spinner from '../Spinner/Spinner'
import StockGallery from '../StockGallery/StockGallery'

const Home = () => {
    const [data] = useInventoriesData()
    return (
        <div>
            {data.length === 0 ? (
                <Spinner />
            ) : (
                <>
                    {' '}
                    <Header />
                    <FourItems />
                    <SpecialDeal />
                    <StockGallery />
                </>
            )}
        </div>
    )
}

export default Home
