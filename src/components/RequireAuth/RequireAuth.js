import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../Firebase/Firebase'
import EmailVerification from '../EmailVerification/EmailVerification'
const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return (
            <div className="h-[100vh] w-[100vw] bg-[#171C1D]">
                <div className="flex align-center justify-center">
                    <img
                        className="h-[500px] w-[500px]  "
                        src="https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif"
                        alt=""
                    />
                </div>
            </div>
        )
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (!user.emailVerified) {
        return <EmailVerification />
    }

    return children
}

export default RequireAuth
