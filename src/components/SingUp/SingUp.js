import {
    faChildReaching,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../Firebase/Firebase'

const SingUp = () => {
    const [showPass, setShowPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)
    const [error, setError] = useState({
        email: '',
        password: '',
        conPassword: '',
        general: '',
    })
    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/emailvarification'
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])

    return (
        <section className=" md:h-[100vh] pt-32 px-8 pb-20 md:pt-44 bg-[#000]">
            <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800  lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                        alt=""
                    />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <p className="text-4xl py-8 text-center text-gray-900 ">
                        <FontAwesomeIcon icon={faChildReaching} /> Gym Guru
                    </p>

                    <p className="text-2xl text-center text-gray-600 ">
                        Sing Up
                    </p>
                    <form>
                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600  "
                                htmlFor="LoggingEmailAddress"
                            >
                                Email Address
                            </label>
                            <input
                                id="LoggingEmailAddress"
                                placeholder="example@example.com"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                            />
                            {error && (
                                <p className="text-red-500">{error?.email}</p>
                            )}
                        </div>

                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600  "
                                htmlFor="loggingPassword"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <p
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-5 cursor-pointer top-2"
                                >
                                    <FontAwesomeIcon
                                        icon={showPass ? faEye : faEyeSlash}
                                    />
                                </p>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    id="loggingPassword"
                                    placeholder="Your Password"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            {error && (
                                <p className="text-red-500">
                                    {error?.password}
                                </p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600  "
                                htmlFor="confirmLoggingPassword"
                            >
                                Confirm Password
                            </label>

                            <div className="relative">
                                <p
                                    onClick={() => setShowConPass(!showConPass)}
                                    className="absolute right-5 cursor-pointer top-2"
                                >
                                    <FontAwesomeIcon
                                        icon={showConPass ? faEye : faEyeSlash}
                                    />
                                </p>
                                <input
                                    id="confirmLoggingPassword"
                                    placeholder="Confirm Password"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                    type={showConPass ? 'text' : 'password'}
                                />
                            </div>
                            {error && (
                                <p className="text-red-500">
                                    {error?.conPassword}
                                </p>
                            )}
                        </div>

                        <div className="mt-8">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Sing Up
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <p className="mt-6 text-sm text-center text-gray-400">
                            Already have an account?
                            <Link
                                to="/login"
                                className="text-blue-500 focus:outline-none focus:underline hover:underline"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingUp
