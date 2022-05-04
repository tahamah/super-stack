import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const UpdateProduct = () => {
    const [productData, setProductData] = useState([])
    const { img, product_name, supplier_name, body, quantity } = productData
    const [quantityQuant, setQuantityQuant] = useState(0)
    const { product_id } = useParams()
    const handDelivered = () => {
        const newQuantity = quantityQuant - 1
        setQuantityQuant(newQuantity)
        fetch(
            `https://agile-journey-07748.herokuapp.com/product/${product_id}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    quantity: newQuantity,
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((json) => {
                toast('One Product has been Delivered')
                console.log(json)
            })
    }

    useEffect(() => {
        fetch(`https://agile-journey-07748.herokuapp.com/product/${product_id}`)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data)
                setQuantityQuant(data.quantity)
            })
    }, [])
    return (
        <div className="md:min-h-screen">
            <ToastContainer />
            <div class="max-w-2xl mx-auto overflow-hidden mt-16 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img class="object-cover w-full h-64" src={img} alt="Article" />

                <div class="p-6">
                    <div class="mt-4">
                        <form className="mt-6">
                            <div className="md:flex ">
                                <div className="md:w-1/2">
                                    <label
                                        for="username"
                                        className="block text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        Product Name:
                                    </label>
                                    <input
                                        name="productName"
                                        placeholder="Product Name"
                                        type="text"
                                        value={product_name}
                                        className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10">
                                    <label
                                        for="username"
                                        className="block text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        Supplier Name:
                                    </label>
                                    <input
                                        name="supplierName"
                                        placeholder="Supplier Name"
                                        type="text"
                                        value={supplier_name}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <label
                                        for="password"
                                        className="block text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        Description:
                                    </label>
                                </div>

                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={body}
                                    type="text"
                                    rows="6"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                    readOnly
                                    disabled
                                />
                            </div>

                            <div className="md:flex gap-10 mt-4">
                                <div className="md:w-1/2 md:mt-0 mt-6 md:md-0  ">
                                    <label
                                        for="username"
                                        className="block text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        Quantity:
                                    </label>
                                    <input
                                        name="quantity"
                                        type="number"
                                        value={quantityQuant}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="md:w-1/2 md:mt-0 mt-6 md:md-0  ">
                                    <label
                                        for="username"
                                        className="block text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        Add Quantity:
                                    </label>
                                    <input
                                        name="addQuantity"
                                        placeholder="example 132"
                                        type="number"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex gap-10">
                                <button
                                    type="button"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                >
                                    Add Quantity
                                </button>
                                <button
                                    onClick={handDelivered}
                                    type="button"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                >
                                    Delivered
                                </button>
                            </div>
                            {/* <button onClick={() => navigate(-1)}>
                                Go Back
                            </button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
