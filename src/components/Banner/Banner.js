import React from 'react'
import Typical from 'react-typical'

const Banner = () => {
    return (
        <div className="bg-[#f3efec] md:h-[110vh] -z-20">
            <div className=" mx-auto max-w-[1920px] md:relative ">
                <div className="md:flex pt-24  md:h-[80vh] max-w-[1500px] mx-auto ">
                    <div className="w-2/3 ">
                        <img
                            className=" max-h-[700px] mx-auto md:absolute -z-0 md:-bottom-44 -left-28"
                            src="https://i.ibb.co/MPJM6kg/banner-1.png"
                            alt=""
                        />
                    </div>
                    <div className="w-2/3 z-10 flex mt-[20vh]">
                        <div className="text-red-600 min-h-screen">
                            <p className="text-lime-300 font-bold text-7xl">
                                Stay Connect With Alu
                            </p>
                            <p className="text-lime-300 font-bold text-7xl">
                                &&
                            </p>
                            <span className="text-yellow-400  text-7xl">
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        'Won Free Dalivery',
                                        1000,
                                        'Hello world!',
                                        1000,
                                    ]}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
