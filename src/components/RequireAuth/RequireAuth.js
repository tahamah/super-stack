import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../Firebase/Firebase'
import EmailVerification from '../EmailVerification/EmailVerification'
import Spinner from '../Spinner/Spinner'
const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Spinner />
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
