import { faChildReaching, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ManageAll = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://agile-journey-07748.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className="py-20 md:min-h-[110vh]">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                    <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="flex items-center">
                            Products: {products.length}
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-center">
                            <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">
                                <Link to="/addItems">Add New Items</Link>
                            </button>
                            <Link
                                to="/addItems"
                                className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-plus"
                                    width={28}
                                    height={28}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-hidden ">
                    <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    Img
                                </th>

                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <p>Name</p>
                                    <p>Supplier Name</p>
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    Price
                                </th>

                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    Quantity
                                </th>

                                <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                                    Delete
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr
                                    key={product._id}
                                    className="h-24 border-gray-300 dark:border-gray-200 border-b"
                                >
                                    <td className="pl-8 pr-6 leading-4">
                                        <div className="h-10 w-14">
                                            <img
                                                className="h-full w-full rounded overflow-hidden shadow"
                                                src={product.img}
                                                alt=""
                                            />
                                        </div>
                                    </td>

                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <p className="mb-2">
                                            {product.product_name}
                                        </p>
                                        <small>
                                            By {product.supplier_name}
                                        </small>
                                    </td>

                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <p>${product.price}</p>
                                        <p>par {product.unit}</p>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        {product.quantity}
                                    </td>

                                    <td className="pr-8 relative">
                                        <button className=" cursor-pointer focus:outline-none">
                                            <div className="text-gray-500 p-2 border-transparent hover:text-white rounded-full border font-bold hover:bg-red-500 duration-500 cursor-pointer">
                                                <FontAwesomeIcon
                                                    icon={faTrashCan}
                                                />
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageAll
