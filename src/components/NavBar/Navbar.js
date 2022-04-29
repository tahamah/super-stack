import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-[#51AA1C] shadow sticky top-0  z-50">
            <div className="container px-6 py-4 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-white">
                            <Link
                                className="text-2xl font-bold text-white transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-white dark:hover:text-gray-300"
                                to="/"
                            >
                                Brand
                            </Link>
                        </div>

                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-current"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <Link
                                to="/"
                                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-white transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-500 dark:hover:bg-gray-700"
                            >
                                Join Slack
                            </Link>
                            <Link
                                to="/"
                                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-white transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-500 dark:hover:bg-gray-700"
                            >
                                Browse Topics
                            </Link>
                            <Link
                                to="/"
                                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-white transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-500 dark:hover:bg-gray-700"
                            >
                                Random Item
                            </Link>
                            <Link
                                to="/"
                                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-white transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-500 dark:hover:bg-gray-700"
                            >
                                Experts
                            </Link>
                        </div>

                        <div className="flex items-center mt-4 md:mt-0">
                            <button
                                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-white transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-500 dark:hover:bg-gray-700"
                                aria-label="show notifications"
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                className="flex items-center focus:outline-none"
                                aria-label="toggle profile dropdown"
                            >
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        className="object-cover w-full h-full"
                                        alt="avatar"
                                    />
                                </div>

                                <h3 className="mx-2 text-sm font-medium text-white dark:text-gray-200 md:hidden">
                                    Khatab wedaa
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
