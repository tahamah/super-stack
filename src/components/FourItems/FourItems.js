import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInventoriesData from '../../hooks/useInventoriesData'

const FourItems = () => {
    const [data] = useInventoriesData()
    const navigate = useNavigate()
    const navigateToUpdate = (id) => {
        navigate(`update/${id}`)
    }

    return (
        <div className="md:min-h-[150vh]  flex flex-col justify-center">
            <div className="mx-auto">
                <h1 className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                    Inventories
                </h1>
            </div>
            <div className="grid mx-10 mt-10 gap-10 grid-cols-1 md:pt-28 md:grid-cols-2 max-w-7xl md:mx-auto">
                {data.map((p) => (
                    <div className="md:flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="md:w-1/3  bg-cover">
                            <img
                                className=" md:h-full h-[270px] w-full"
                                src={p.img}
                                alt=""
                            />
                        </div>

                        <div className="md:w-2/3 w-full p-4 md:p-4">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                                {p.product_name}
                            </h1>
                            <p className="text-gray-400">
                                by {p.supplier_name}
                            </p>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {p.body.slice(0, 100)}
                            </p>
                            <p className="mt-5">
                                Available: {p.quantity} carot
                            </p>

                            <div className="md:flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                                    ${p.price}
                                    <span className="text-sm font-normal text-gray-00 ">
                                        ( {p.unit} )
                                    </span>
                                </h1>
                                <button
                                    onClick={() => navigateToUpdate(p._id)}
                                    className="px-2 py-1 mt-2 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 "
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
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
