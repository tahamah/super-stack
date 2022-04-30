import React from 'react'
import { Link } from 'react-router-dom'

const FourItems = () => {
    return (
        <div className="md:h-[100vh] flex flex-col justify-center">
            <div className="mx-auto">
                <h1 className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                    Inventories
                </h1>
            </div>
            <div className="grid mx-10 gap-10 grid-cols-1 md:pt-28 md:grid-cols-2 max-w-7xl md:mx-auto">
                <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="w-1/3 bg-cover">
                        <img
                            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt=""
                        />
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                            Orange
                        </h1>
                        <p className="text-gray-400">by Rahim</p>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit In odit
                        </p>
                        <p className="mt-5">Avilable: 500 carot</p>

                        <div class="flex justify-between mt-3 item-center">
                            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                                $220{' '}
                                <span className="text-sm font-normal text-gray-00 ">
                                    ( par carot )
                                </span>
                            </h1>
                            <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="w-1/3 bg-cover">
                        <img
                            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt=""
                        />
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                            Orange
                        </h1>
                        <p className="text-gray-400">by Rahim</p>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit In odit
                        </p>
                        <p className="mt-5">Avilable: 500 carot</p>

                        <div class="flex justify-between mt-3 item-center">
                            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                                $220{' '}
                                <span className="text-sm font-normal text-gray-00 ">
                                    ( par carot )
                                </span>
                            </h1>
                            <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="w-1/3 bg-cover">
                        <img
                            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt=""
                        />
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                            Orange
                        </h1>
                        <p className="text-gray-400">by Rahim</p>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit In odit
                        </p>
                        <p className="mt-5">Avilable: 500 carot</p>

                        <div class="flex justify-between mt-3 item-center">
                            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                                $220{' '}
                                <span className="text-sm font-normal text-gray-00 ">
                                    ( par carot )
                                </span>
                            </h1>
                            <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="w-1/3 bg-cover">
                        <img
                            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt=""
                        />
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                            Orange
                        </h1>
                        <p className="text-gray-400">by Rahim</p>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit In odit
                        </p>
                        <p className="mt-5">Avilable: 500 carot</p>

                        <div class="flex justify-between mt-3 item-center">
                            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                                $220{' '}
                                <span className="text-sm font-normal text-gray-00 ">
                                    ( par carot )
                                </span>
                            </h1>
                            <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-20">
                <Link to="/manageAll" className="border-2 py-2 px-5">
                    ManageAll
                </Link>
            </div>
        </div>
    )
}

export default FourItems
