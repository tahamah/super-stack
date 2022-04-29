import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/NavBar/Navbar'
import NotFound from './components/NotFound/NotFound'

function App() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
