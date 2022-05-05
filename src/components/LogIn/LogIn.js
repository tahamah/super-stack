import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChildReaching,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import auth from '../../Firebase/Firebase'
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import axios from 'axios'

const LogIn = () => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [error, setError] = useState({ email: '', password: '', general: '' })
    const [signInWithEmailAndPassword, user, loading, hookError] =
        useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth)
    const [showPass, setShowPass] = useState(false)

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

    const handleLogIn = (e) => {
        e.preventDefault()
        const email = userInfo.email
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
        fetch('https://agile-journey-07748.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken)
                navigate(from)
            })
    }
    useEffect(() => {
        const error = hookError || googleError
        if (error) {
            switch (error?.code) {
                case 'auth/user-not-found':
                    toast('User not Found!')
                    break
                case 'auth/invalid-email':
                    toast('Invalid Email!')
                    break
                case 'auth/invalid-password':
                    toast('Invalid Password!')
                    break
                default:
                    toast('Something is wrong')
                    break
            }
        }
    }, [hookError, googleError])
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    useEffect(() => {
        const u = user || googleUser
        if (u) {
            // navigate(from)
        }
    }, [user, googleUser])

    return (
        <section className=" md:h-[100vh] pt-32 px-8 pb-20 md:pt-44 bg-[#000]">
            <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800  lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img src="https://i.ibb.co/p1Cj2g7/log-in.png" alt="" />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <p className="text-4xl py-8 text-center text-gray-900 ">
                        Brand Name
                    </p>

                    <p className="text-2xl text-center text-gray-600 ">
                        Log In
                    </p>

                    <div
                        onClick={() => signInWithGoogle()}
                        className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700   hover:bg-gray-50 "
                    >
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107"
                                />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00"
                                />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2"
                                />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">
                            Sign in with Google
                        </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <Link
                            to="/login"
                            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                        >
                            or login with email
                        </Link>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleLogIn}>
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
                            <div className="flex justify-between">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600  "
                                    htmlFor="loggingPassword"
                                >
                                    Password
                                </label>
                                <Link
                                    to="/reset"
                                    className="text-xs cursor-pointer text-blue-500 dark:text-gray-300 hover:underline"
                                >
                                    Forget Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <p
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute  right-5 cursor-pointer top-2"
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

                        <div className="mt-8">
                            <ToastContainer />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <p className="mt-6 text-sm text-center text-gray-400">
                            Don&#x27;t have an account yet?{' '}
                            <Link
                                to="/singup"
                                className="text-blue-500 focus:outline-none focus:underline hover:underline"
                            >
                                Create account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn
