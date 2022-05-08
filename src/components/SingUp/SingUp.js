import {
    faChildReaching,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify'
import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import auth from '../../Firebase/Firebase'

const SingUp = () => {
    const [showPass, setShowPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        conPassword: '',
    })
    const [error, setError] = useState({
        email: '',
        password: '',
        conPassword: '',
        general: '',
    })

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const handEmailChange = (e) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setError({ ...error, email: '' })
        } else {
            setError({ ...error, email: 'Invalid Email' })
            setUserInfo({ ...userInfo, email: '' })
        }
    }
    const handPasswordChange = (e) => {
        if (e.target.value.length >= 6) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setError({ ...error, password: '' })
        } else {
            setError({ ...error, password: ' Password Minimum 6 Character' })
            setUserInfo({ ...userInfo, password: '' })
        }
    }
    const handConPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, conPassword: e.target.value })
            setError({ ...error, conPassword: '' })
        } else {
            setError({ ...error, conPassword: " Password doesn't match" })
            setUserInfo({ ...userInfo, conPassword: '' })
        }
    }

    const handleSingUp = (e) => {
        if (userInfo.password === userInfo.conPassword) {
            e.preventDefault()
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        } else {
            e.preventDefault()
            toast("Confirm Password does n't match")
        }
    }

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case 'auth/user-not-found':
                    toast('User not Found!')
                    break
                case 'auth/invalid-email':
                    toast('Invalid Email!')
                    break
                case 'auth/email-already-in-use':
                    toast(' Email already used')
                    break
                default:
                    toast('Something is wrong')
                    break
            }
        }
    }, [hookError])
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/emailvarification'
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])

    return (
        <section className=" md:h-[100vh] pt-32 px-8 pb-20 md:pt-44 bg-[#03203C]">
            <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800  lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img src="https://i.ibb.co/p1Cj2g7/log-in.png" alt="" />
                </div>
                <ToastContainer />
                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <p className="text-4xl py-8 text-center text-gray-900 ">
                        Super Stock
                    </p>

                    <p className="text-2xl text-center text-gray-600 ">
                        Sing Up
                    </p>
                    <form onSubmit={handleSingUp}>
                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600  "
                                htmlFor="LoggingEmailAddress"
                            >
                                Email Address
                            </label>
                            <input
                                onChange={handEmailChange}
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
                                    onChange={handPasswordChange}
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
                                    onChange={handConPasswordChange}
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
