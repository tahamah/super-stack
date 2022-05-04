import React, { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify'
import auth from '../../Firebase/Firebase'

const PassReset = () => {
    const [email, setEmail] = useState()
    const [sendPasswordResetEmail, sending, sendError] =
        useSendPasswordResetEmail(auth)
    const handEmailChange = (e) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setEmail(e.target.value)
            toast('Email has been sent')
        } else {
            toast('Invalid Email')
            setEmail('')
        }
    }
    const handSend = (e) => {
        e.preventDefault()
    }
    return (
        <div className="h-[100vh] px-10 pt-20 md:pt-40">
            <div className="w-full mt-40 max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Enter your Email
                </h1>

                <form onSubmit={handSend} className="mt-6">
                    <div>
                        <label
                            for="username"
                            className="block text-sm text-gray-800 dark:text-gray-200"
                        >
                            Email
                        </label>
                        <input
                            onBlur={handEmailChange}
                            placeholder="example@gmail.com"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={async () => {
                                await sendPasswordResetEmail(email)

                                // navigate('/login')
                            }}
                            className="w-full font-bold px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Send
                        </button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PassReset
