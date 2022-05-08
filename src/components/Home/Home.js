import React from 'react'
import useInventoriesData from '../../hooks/useInventoriesData'
import Inventories from '../Inventories/Inventories'
import Header from '../Header/Header'
import SpecialDeal from '../SpecialDeal/SpecialDeal'
import Spinner from '../Spinner/Spinner'
import StockGallery from '../StockGallery/StockGallery'
import Footer from '../Footer/Footer'
import PageTitle from '../PageTitle/PageTitle'

const Home = () => {
    const [data] = useInventoriesData()
    return (
        <div>
            {data.length === 0 ? (
                <Spinner />
            ) : (
                <>
                    <Header />
                    <Inventories />
                    <SpecialDeal />
                    <StockGallery />
                    <Footer />
                    <PageTitle title={'Home'} />
                </>
            )}
        </div>
    )
}

export default Home
