import React from 'react'

const StockGallery = () => {
    return (
        <div className="md:h-[110vh] overflow-x-hidden bg-yellow-500">
            <div className=" py-20 flex flex-col items-center justify-center">
                <div className="xl:w-1/2 w-11/12">
                    <h1 className="md:text-6xl text-5xl font-bold 2xl:leading-10 leading-0 text-center text-gray-100">
                        Stock Gallery
                    </h1>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-44 h-2 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-20 h-2 mx-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-12 h-2 bg-red-500 rounded-full"></span>
                    </div>
                </div>
                <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
                    <div className="mt-24">
                        <div className="flex items-end ">
                            <img
                                tabIndex={0}
                                src="https://i.ibb.co/8zjrQ0g/g-2.png"
                                alt="girl with blue background"
                                className="w-20 h-20 rounded-lg mr-6"
                            />
                            <img
                                tabIndex={0}
                                src="https://i.ibb.co/bR0F26g/glx-2.png"
                                alt="guy winking"
                                className="w-48 h-36 rounded-lg"
                            />
                        </div>
                        <div className="flex  items-center justify-end my-6">
                            <img
                                tabIndex={0}
                                className="rounded-lg"
                                src="https://i.ibb.co/dt6tCgn/gm-2.png"
                                alt="guy smiling"
                            />
                        </div>
                        <div className="flex items-start">
                            <img
                                tabIndex={0}
                                src="https://i.ibb.co/ZTCKnSB/gm-3.png"
                                alt="girl with  background"
                                className="w-48 h-48 rounded-lg"
                            />
                            <img
                                tabIndex={0}
                                src="https://i.ibb.co/gv6VG5G/g-3.png"
                                alt="guy with glasses"
                                className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
                            />
                        </div>
                    </div>
                    <div className="ml-6 mt-32">
                        <img
                            tabIndex={0}
                            src="https://i.ibb.co/x2JFJYK/Untitled-design-4.png"
                            className="w-72 h-80 rounded-lg"
                            alt="guy with sunglasses"
                        />
                        <div className="flex items-start mt-6">
                            <img
                                tabIndex={0}
                                src="https://i.ibb.co/FKS4SyL/gm-4.png"
                                alt="girl  laughing"
                                className="w-48 h-48 rounded-lg"
                            />
                            <img
                                tabIndex={0}
                                src="https://i.ibb.co/kxZpcGZ/g-4.png"
                                alt="guy with glasses"
                                className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
                            />
                        </div>
                    </div>
                    <div className="mt-14 ml-6">
                        <div className="lg:flex ">
                            <div>
                                <img
                                    tabIndex={0}
                                    src="https://i.ibb.co/MPDBVMm/Untitled-design-5.png"
                                    alt="group of friends"
                                    className="w-96 h-72 rounded-lg object-center object-fit"
                                />
                            </div>
                            <div>
                                <div className="flex ml-6">
                                    <img
                                        tabIndex={0}
                                        src="https://i.ibb.co/G2021yT/g-1.png"
                                        className="w-20 h-20 rounded-lg mt-14"
                                        alt="man"
                                    />
                                    <img
                                        tabIndex={0}
                                        src="https://i.ibb.co/6JDbbMB/Untitled-design-6.png"
                                        className="w-20 h-24 rounded-lg ml-6"
                                        alt="woman"
                                    />
                                </div>
                                <img
                                    tabIndex={0}
                                    src="https://i.ibb.co/2qv0W06/glx-1.png"
                                    alt="boy with blonde hair"
                                    className="ml-6 mt-6 w-48 h-32 rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex">
                            <img
                                tabIndex={0}
                                className="w-48 h-48 rounded-lg"
                                src="https://i.ibb.co/KWrLCKP/gm-1.png"
                                alt="young girl with red hair"
                            />
                            <img
                                tabIndex={0}
                                className="w-72 hidden md:block h-56 rounded-lg ml-6"
                                src="https://i.ibb.co/mC8qrfR/gm-5.png"
                                alt="young girl with red hair"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockGallery
