import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import auth from '../../Firebase/Firebase'
//bg-[#51AA1C]
const Navbar = () => {
    const [show, setShow] = useState(null)
    const [user, loading, error] = useAuthState(auth)
    const userName = user?.displayName
    const photo = user?.photoURL
    const photoDefult = 'https://i.ibb.co/kc4D42k/images.png'
    return (
        <div className="bg-gray-200 md:sticky md:top-0  z-50 h-full w-full">
            {/* Code block starts */}
            <nav className="w-full bg-white hidden xl:block shadow">
                <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
                    <div className="flex items-center">
                        <div className="mr-10 flex items-center">
                            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                                Brand Name
                            </h3>
                        </div>
                        <ul className="hidden xl:flex items-center h-full">
                            <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out">
                                <Link to="/" className="cursor-pointer">
                                    Home
                                </Link>
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out">
                                Products
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out">
                                Blog
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out">
                                Deliverables
                            </li>
                        </ul>
                    </div>
                    <div className="h-full hidden xl:flex items-center justify-end">
                        <div className="h-full gap-x-5 flex">
                            <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-400">
                                <Link to="/myItems">My Items</Link>
                            </div>
                            <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-400">
                                <Link to="/addItems">Add Items</Link>
                            </div>
                            <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-400">
                                <Link to="/manageAll">Manage All</Link>
                            </div>
                            <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-400">
                                {user ? (
                                    <span onClick={() => signOut(auth)}>
                                        Log Out
                                    </span>
                                ) : (
                                    <Link to="/login">Log In</Link>
                                )}
                            </div>
                            <div className="flex items-center pl-8 relative">
                                <img
                                    className="rounded-full  h-10 w-10 object-cover"
                                    src={user ? photo : photoDefult}
                                    alt="Profile"
                                />

                                <p className="text-gray-400 ml-5 font-bold">
                                    {user ? userName : 'User'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar */}
            <nav>
                <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
                    <div className="w-24">logo</div>
                    <div>
                        <div
                            id="menu"
                            className="text-gray-800"
                            onClick={() => setShow(!show)}
                        >
                            {show ? (
                                ' '
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-menu-2"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
                {/*Mobile responsive sidebar*/}
                <div
                    className={
                        show
                            ? 'absolute xl:hidden duration-500 w-full h-full left-0  z-40'
                            : 'absolute xl:hidden duration-500 w-full h-full -left-[400px] z-40'
                    }
                    id="mobile-nav"
                >
                    <div
                        className="bg-white opacity-50 w-full h-full"
                        onClick={() => setShow(!show)}
                    />
                    <div className="w-64 z-40 fixed overflow-y-auto  top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <p className="text-base text-gray-800 ml-3">
                                                    The North
                                                </p>
                                            </div>
                                            <div
                                                id="cross"
                                                className="text-gray-800"
                                                onClick={() => setShow(!show)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-x"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                    />
                                                    <line
                                                        x1={18}
                                                        y1={6}
                                                        x2={6}
                                                        y2={18}
                                                    />
                                                    <line
                                                        x1={6}
                                                        y1={6}
                                                        x2={18}
                                                        y2={18}
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        <Link to="/" className="cursor-pointer">
                                            <li className="text-gray-800 pt-8">
                                                <div className="flex items-center">
                                                    <p className="text-indigo-700 xl:text-base text-base ml-3">
                                                        Home
                                                    </p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to="/" className="cursor-pointer">
                                            <li className="text-gray-800 pt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                                            Products
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to="/" className="cursor-pointer">
                                            <li className="text-gray-800 pt-8">
                                                <div className="flex items-center">
                                                    <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                                        Performance
                                                    </p>
                                                </div>
                                            </li>
                                        </Link>
                                        <li className="text-gray-800 pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                                        Deliverables
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="text-gray-800 pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                                        <Link to="/myItems">
                                                            My Items
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="text-gray-800 pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                                        <Link to="/addItems">
                                                            Add Items
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="text-gray-800 pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                                        <Link to="/manageAll">
                                                            Manage All
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full pt-4">
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between pt-1">
                                            <div className="flex items-center">
                                                <img
                                                    alt="profile-pic"
                                                    src={
                                                        user
                                                            ? photo
                                                            : photoDefult
                                                    }
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <p className=" text-gray-800 text-base leading-4 ml-2">
                                                    {user ? userName : 'User'}
                                                </p>
                                            </div>
                                            <ul className="flex">
                                                <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-messages"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                            />
                                                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-bell"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                            />
                                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                        </svg>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar ends */}
            {/* Code block ends */}
        </div>
    )
}

export default Navbar
