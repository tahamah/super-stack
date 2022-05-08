import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../Firebase/Firebase'

const AddItems = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const handAdd = (e) => {
        e.preventDefault()
        const product_name = e.target.productName.value
        const supplier_name = e.target.supplierName.value
        const img = e.target.photoUrl.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const unit = e.target.unit.value
        const body = e.target.description.value
        const email = user?.email

        fetch('https://agile-journey-07748.herokuapp.com/product', {
            method: 'POST',
            body: JSON.stringify({
                product_name,
                supplier_name,
                img,
                price,
                quantity,
                unit,
                body,
                email,
            }),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => {
            res.json()
            toast('Product Added')
            e.target.reset()
        })
    }
    return (
        <div className="md:min-h-[130vh] -mt-[88px] overflow-x-hidden flex bg-[#03203C] align-center">
            <div className="md:w-1/2 w-full px-5 flex flex-col justify-between">
                <div className="hidden md:block"></div>
                <div className="pb-20 pt-44 md:pt-0">
                    <div className="w-full  md:max-w-lg max-w-sm p-6 m-auto  bg-[#120E43] duration-500 rounded-md shadow-md">
                        <h1
                            className="text-3xl mb-20  font-bold text-center text-gray-100 duration-500  dark:text-white"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Add New
                        </h1>
                        <ToastContainer />

                        <form onSubmit={handAdd} className="mt-6">
                            <div className="md:flex ">
                                <div
                                    className="md:w-1/2"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200"
                                    >
                                        Product Name:
                                    </label>
                                    <input
                                        name="productName"
                                        placeholder="Product Name"
                                        type="text"
                                        className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200"
                                    >
                                        Supplier Name:
                                    </label>
                                    <input
                                        name="supplierName"
                                        placeholder="Supplier Name"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>

                            <div
                                className="mt-4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm text-gray-200"
                                    >
                                        Photo Url:
                                    </label>
                                </div>

                                <input
                                    name="photoUrl"
                                    placeholder="https://example.png"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                />
                            </div>
                            <div className="md:flex  mt-4">
                                <div
                                    className="md:w-1/2"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200"
                                    >
                                        Price:
                                    </label>
                                    <input
                                        name="price"
                                        placeholder="Price"
                                        type="number"
                                        className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200"
                                    >
                                        Quantity:
                                    </label>
                                    <input
                                        name="quantity"
                                        type="number"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200"
                                    >
                                        Unit:
                                    </label>
                                    <input
                                        name="unit"
                                        placeholder="kg/L"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                className="mt-4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm text-gray-200"
                                    >
                                        Description:
                                    </label>
                                </div>

                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                />
                            </div>

                            <div
                                className="mt-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors ease-in-out duration-500 transform bg-green-500 font-bold rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700 "
                                >
                                    Add
                                </button>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <button
                                    className="bg-red-600 text-white py-1 px-5 hover:-translate-x-3 duration-500  rounded-full mt-5"
                                    onClick={() => navigate(-1)}
                                >
                                    Go Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-1/2 hidden  md:flex flex-col justify-between">
                <div className="pt-[100px]">
                    <img src="https://i.ibb.co/1njvBPz/about.png" alt="" />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AddItems
