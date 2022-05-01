import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn'
import ManageAll from './components/ManageAll/ManageAll'
import Navbar from './components/NavBar/Navbar'
import NotFound from './components/NotFound/NotFound'
import RequireAuth from './components/RequireAuth/RequireAuth'
import SingUp from './components/SingUp/SingUp'

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/manageAll"
                    element={
                        <RequireAuth>
                            <ManageAll />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/singUp" element={<SingUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
