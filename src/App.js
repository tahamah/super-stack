import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddItems from './components/AddItems/AddItems'
import EmailVerification from './components/EmailVerification/EmailVerification'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn'

import ManageAll from './components/ManageAll/ManageAll'
import MyItems from './components/MyItems/MyItems'
import Navbar from './components/NavBar/Navbar'
import NotFound from './components/NotFound/NotFound'
import PassReset from './components/PassReset/PassReset'
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
                    path="/myItems"
                    element={
                        <RequireAuth>
                            <MyItems />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/addItems"
                    element={
                        <RequireAuth>
                            <AddItems />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/manageAll"
                    element={
                        <RequireAuth>
                            <ManageAll />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/reset" element={<PassReset />} />
                <Route
                    path="/emailvarification"
                    element={<EmailVerification />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
