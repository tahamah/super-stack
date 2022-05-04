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
        <div className="md:min-h-screen flex align-center">
            <div className="w-full md:max-w-2xl max-w-sm p-6 m-auto bg-blue-500 hover:bg-green-500 duration-500 rounded-md shadow-md">
                <h1 className="text-3xl mb-20  font-bold text-center text-gray-100 duration-500 hover:text-red-500 dark:text-white">
                    Add a Item
                </h1>
                <ToastContainer />

                <form onSubmit={handAdd} className="mt-6">
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
                                className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
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
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label
                                for="password"
                                className="block text-sm text-gray-800 dark:text-gray-200"
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
                        <div className="md:w-1/2">
                            <label
                                for="username"
                                className="block text-sm text-gray-800 dark:text-gray-200"
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
                        <div className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10">
                            <label
                                for="username"
                                className="block text-sm text-gray-800 dark:text-gray-200"
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
                        <div className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10">
                            <label
                                for="username"
                                className="block text-sm text-gray-800 dark:text-gray-200"
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
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Add
                        </button>
                    </div>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </form>
            </div>
        </div>
    )
}

export default AddItems
