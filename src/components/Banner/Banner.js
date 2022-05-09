import React from 'react'
import Typical from 'react-typical'

const Banner = () => {
    return (
        <div className="bg-[#03203C] overflow-hidden md:min-h-[110vh] -z-20">
            <div className=" mx-auto max-w-[1920px] md:relative">
                <div className="md:flex pt-24  md:h-[80vh] max-w-[1500px] mx-auto ">
                    <div className="w-2/3">
                        <img
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            className=" max-h-[700px] mx-auto md:absolute -z-0 md:-bottom-44 -left-28"
                            src="https://i.ibb.co/MPJM6kg/banner-1.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="w-2/3 z-10 flex mt-[20vh]"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <div className="text-5xl md:text-7xl mx-10 md:mx-0 min-h-[400px]">
                            <p className="text-lime-300 font-bold ">
                                Stay Connected
                            </p>
                            <p className="text-lime-300 font-bold ">&&</p>
                            <span className="text-yellow-400  ">
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        'Make your business  easy!',
                                        4000,
                                        'Grow your business!',
                                        2000,
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
