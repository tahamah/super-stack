import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import PageTitle from '../PageTitle/PageTitle'

const UpdateProduct = () => {
    const [productData, setProductData] = useState([])
    const { img, product_name, supplier_name, body, price } = productData
    const [quantityQuant, setQuantityQuant] = useState(0)
    const { product_id } = useParams()
    const [addQuantity, setAddQuantity] = useState(0)
    const navigate = useNavigate()

    const handAdd = () => {
        const addInput = document.getElementById('addInput')
        if (parseInt(addQuantity) > 0) {
            const newQuantity = parseInt(addQuantity) + quantityQuant
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
                    addInput.value = ''
                    toast(
                        <div className="flex w-full max-w-sm mx-auto  bg-white ">
                            <div className="flex rounded-l items-center justify-center w-12 bg-emerald-500">
                                <svg
                                    className="w-6 h-6 text-white  fill-current"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                                </svg>
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-emerald-500 ">
                                        Success
                                    </span>
                                    <p className="text-sm text-gray-600 ">
                                        Successfully Added!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
        } else {
            toast(
                <div className="flex w-full">
                    <div className="flex rounded-l items-center justify-center w-12 bg-red-500">
                        <svg
                            className="w-6 h-6 text-white fill-current"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                        </svg>
                    </div>

                    <div className="px-4 py-2 -mx-3">
                        <div className="mx-3">
                            <span className="font-semibold text-red-500 ">
                                Ops !
                            </span>
                            <p className="text-sm text-gray-600 ">
                                Please Add a positive value!
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }
    const handDelivered = () => {
        if (quantityQuant > 0) {
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
                    toast(
                        <div className="flex w-full max-w-sm mx-auto  bg-white ">
                            <div className="flex rounded-l items-center justify-center w-12 bg-emerald-500">
                                <svg
                                    className="w-6 h-6 text-white  fill-current"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                                </svg>
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-emerald-500 ">
                                        Success
                                    </span>
                                    <p className="text-sm text-gray-600 ">
                                        One Product Delivered!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
        } else {
            toast(
                <div className="flex w-full">
                    <div className="flex rounded-l items-center justify-center w-12 bg-red-500">
                        <svg
                            className="w-6 h-6 text-white fill-current"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                        </svg>
                    </div>

                    <div className="px-4 py-2 -mx-3">
                        <div className="mx-3">
                            <span className="font-semibold text-red-500 ">
                                Ops !
                            </span>
                            <p className="text-sm text-gray-600 ">
                                Stock is empty!
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
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
        <div className="md:min-h-screen overflow-hidden pt-16 bg-[#03203C]">
            <PageTitle title={'Update Product'} />
            <ToastContainer />
            <div className="max-w-lg  mx-4 md:mx-auto  bg-[#120E43] rounded-lg shadow-md">
                <img
                    className="object-cover rounded-t-lg w-full h-64"
                    src={img}
                    alt="Article"
                />

                <div className="p-6">
                    <div className="mt-4">
                        <div className="mt-6">
                            <div className="md:flex ">
                                <div
                                    className="md:w-1/2"
                                    text-gray-200
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
                                        value={product_name}
                                        className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200 "
                                    >
                                        Supplier Name:
                                    </label>
                                    <input
                                        name="supplierName"
                                        placeholder="Supplier Name"
                                        type="text"
                                        value={supplier_name}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="md:flex gap-10 mt-4">
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200 "
                                    >
                                        Quantity:
                                    </label>
                                    <input
                                        name="quantity"
                                        type="number"
                                        value={quantityQuant}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200 "
                                    >
                                        Price:
                                    </label>
                                    <input
                                        name="quantity"
                                        type="number"
                                        value={price}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div
                                    className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <label
                                        htmlFor="username"
                                        className="block text-sm text-gray-200 "
                                    >
                                        Add Quantity:
                                    </label>
                                    <input
                                        onBlur={(e) =>
                                            setAddQuantity(e.target.value)
                                        }
                                        id="addInput"
                                        name="addQuantity"
                                        placeholder="example 32"
                                        type="number"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex gap-10">
                                <button
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                    onClick={handDelivered}
                                    type="button"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                >
                                    Delivered
                                </button>

                                <button
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    onClick={handAdd}
                                    type="submit"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                >
                                    Add Quantity
                                </button>
                            </div>
                            <div
                                className="mt-4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm text-gray-200 "
                                    >
                                        Description:
                                    </label>
                                </div>

                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={body}
                                    type="text"
                                    rows="3"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                    readOnly
                                    disabled
                                />
                            </div>
                            <div className=" md:flex justify-between  mt-4">
                                <div
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <button
                                        className="bg-red-600 text-white py-1 px-5 hover:-translate-x-3 duration-500  rounded-full mt-5"
                                        onClick={() => navigate(-1)}
                                    >
                                        Go Back
                                    </button>
                                </div>
                                <div
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <button className="bg-green-500 text-white py-1 px-5 hover:translate-x-3 duration-500  rounded-full mt-5">
                                        <Link to="/manageAll"> Manage All</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
