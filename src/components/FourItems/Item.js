import React from 'react'

const Item = () => {
    return (
        <div className="md:flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="md:w-1/3  bg-cover">
                <img
                    className=" md:h-full h-[270px] w-full"
                    src="https://i.ibb.co/WcsFPnz/Untitled-design-11.png"
                    alt=""
                />
            </div>

            <div className="md:w-2/3 w-full p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Orange
                </h1>
                <p className="text-gray-400">by Rahim</p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit In
                    odit
                </p>
                <p className="mt-5">Avilable: 500 carot</p>

                <div className="md:flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                        $220{' '}
                        <span className="text-sm font-normal text-gray-00 ">
                            ( par carot )
                        </span>
                    </h1>
                    <button className="px-2 py-1 mt-2 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 ">
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item
