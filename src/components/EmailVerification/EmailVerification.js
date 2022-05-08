import React from 'react'
import auth from '../../Firebase/Firebase'
import {
    useAuthState,
    useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { toast, ToastContainer } from 'react-toastify'
import { Navigate, useLocation } from 'react-router-dom'
import PageTitle from '../PageTitle/PageTitle'

const EmailVerification = () => {
    const [sendEmailVerification] = useSendEmailVerification(auth)

    const [user] = useAuthState(auth)
    const location = useLocation()

    if (user?.emailVerified) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return (
        <div className=" md:mt-44 pt-20 h-[100vh]">
            <PageTitle title={'Email Verification'} />
            <section>
                <div className="md:py-12 relative w-full px-12 py-40 mx-auto lg:px-24 max-w-7xl">
                    <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                        <div className="p-6 lg:text-center">
                            <h4 className="mt-8 text-3xl text-center font-semibold leading-none tracking-tighter text-red-600 lg:text-3xl ">
                                {' '}
                                Your Email is not Verified !!
                            </h4>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={async () => {
                                        await sendEmailVerification()
                                        toast('Email has been sent')
                                    }}
                                    className=" w-25 px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Agin
                                </button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EmailVerification
