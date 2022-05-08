import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import auth from '../../Firebase/Firebase'
import CustomLink from '../CustomLink/CustomLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [show, setShow] = useState(null)
    const [user, loading, error] = useAuthState(auth)
    const userName = user?.displayName
    const photo = user?.photoURL
    const photoDefault = 'https://i.ibb.co/kc4D42k/images.png'
    return (
        <div className=" md:sticky md:top-0  z-50 h-full w-full">
            <nav className="w-full bg-[#000000] hidden  md:py-3 md:block shadow">
                <div className="container px-6 h-16 flex justify-between items-center mx-auto">
                    <div className="flex items-center">
                        <div className="mr-10 flex items-center">
                            <Link
                                to="/"
                                className="text-2xl text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block"
                            >
                                <FontAwesomeIcon
                                    className="mt-1 mr-2 "
                                    icon={faBoxesStacked}
                                />
                                Super Stock
                            </Link>
                        </div>
                        <ul className="hidden ml-10 md:flex gap-5 items-center h-full">
                            <li className="cursor-pointer h-full flex items-center text-sm font-bold  text-white   ">
                                <CustomLink to="/"> Home</CustomLink>
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm font-bold  text-white   ">
                                <CustomLink to="/blogs"> Blogs</CustomLink>
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm font-bold  text-white   ">
                                <CustomLink to="/others"> Others</CustomLink>
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm font-bold  text-white   ">
                                <CustomLink to="/special">
                                    Special Deal
                                </CustomLink>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full hidden xl:flex items-center justify-end">
                        <div className="h-full gap-x-5 flex">
                            {user ? (
                                <div className="h-full gap-x-5 flex">
                                    <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-100">
                                        <CustomLink to="/manageAll">
                                            Manage All
                                        </CustomLink>
                                    </div>
                                    <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-100">
                                        <CustomLink to="/myItems">
                                            My Items
                                        </CustomLink>
                                    </div>
                                    <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-100">
                                        <CustomLink to="/addItems">
                                            Add Items
                                        </CustomLink>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                            <div className="w-20 h-full flex items-center justify-center  cursor-pointer text-gray-400">
                                {user ? (
                                    <span
                                        className="text-gray-100"
                                        onClick={() => signOut(auth)}
                                    >
                                        Log Out
                                    </span>
                                ) : (
                                    <CustomLink to="/login">Log In</CustomLink>
                                )}
                            </div>
                            <div className="flex items-center pl-8 relative">
                                <img
                                    className="rounded-full h-10 w-10 object-cover"
                                    src={user ? photo : photoDefault}
                                    alt="Profile"
                                />

                                <p className="text-gray-100 ml-5 font-bold">
                                    {user ? userName : 'User'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar */}
            <nav>
                <div className="py-4 px-6 w-screen  flex md:hidden justify-between items-center bg-[#000000] fixed top-0 z-40">
                    <div className="w-24 font-bold  text-white">
                        <p>Super Stock</p>
                    </div>
                    <div>
                        <div
                            id="menu"
                            className="text-white"
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
                            : 'absolute xl:hidden duration-500 w-full h-full -left-[500px] z-40'
                    }
                    id="mobile-nav"
                >
                    <div
                        className="bg-[#000000] opacity-50 w-full h-full"
                        onClick={() => setShow(!show)}
                    />
                    <div className="w-64 z-40 fixed overflow-y-auto  top-0 bg-[#000000] shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <Link
                                                    to="/"
                                                    className="text-base text-white ml-3"
                                                >
                                                    <FontAwesomeIcon
                                                        className="mt-1 mr-2 "
                                                        icon={faBoxesStacked}
                                                    />
                                                    Super Stock
                                                </Link>
                                            </div>
                                            <div
                                                id="cross"
                                                className="text-white"
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
                                        <div div className="cursor-pointer">
                                            <li className="text-gray-800 pt-8">
                                                <div className="flex items-center">
                                                    <p className="text-white xl:text-base text-base ml-3">
                                                        <CustomLink to="/">
                                                            Home
                                                        </CustomLink>
                                                    </p>
                                                </div>
                                            </li>
                                        </div>
                                        <div className="cursor-pointer">
                                            <li className="text-gray-800 pt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <p className="text-white xl:text-base md:text-2xl text-base ml-3">
                                                            <CustomLink to="/blogs">
                                                                Blogs
                                                            </CustomLink>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                        <div className="cursor-pointer">
                                            <li className="text-white pt-8">
                                                <div className="flex items-center">
                                                    <p className="text-white xl:text-base md:text-2xl text-base ml-3">
                                                        <CustomLink to="/others">
                                                            Others
                                                        </CustomLink>
                                                    </p>
                                                </div>
                                            </li>
                                        </div>
                                        <li className="text-gray-800 pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-white xl:text-base md:text-2xl text-base ml-3">
                                                        <CustomLink to="/special">
                                                            Special Deal
                                                        </CustomLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="text-gray-800 pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-white xl:text-base md:text-2xl text-base ml-3">
                                                        <CustomLink to="/myItems">
                                                            My Items
                                                        </CustomLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="text-white pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-white xl:text-base md:text-2xl text-base ml-3">
                                                        <CustomLink to="/addItems">
                                                            Add Items
                                                        </CustomLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="text-white pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <p className="text-white xl:text-base md:text-2xl text-base ml-3">
                                                        <CustomLink to="/manageAll">
                                                            Manage All
                                                        </CustomLink>
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
                                                            : photoDefault
                                                    }
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <p className=" text-white text-base leading-4 ml-2">
                                                    {user ? userName : 'User'}
                                                </p>
                                            </div>
                                            <div>
                                                {user ? (
                                                    <span
                                                        className="text-gray-100"
                                                        onClick={() =>
                                                            signOut(auth)
                                                        }
                                                    >
                                                        Log Out
                                                    </span>
                                                ) : (
                                                    <Link
                                                        className="text-gray-100"
                                                        to="/login"
                                                    >
                                                        Log In
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
