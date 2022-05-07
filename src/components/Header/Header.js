import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Header = () => {
    return (
        <div className="md:h-[100vh] w-full">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Hello! Uncle ami bachelor Hello! Uncle ami
                                bachelor Hello! Uncle ami bachelor bachelor
                                Hello! Uncle ami bachelor
                            </h1>
                            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
                                hfsdijgokjdsokjgokjdf
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/kKKGSHZ/slider-3.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Hello! Uncle ami bachelor Hello! Uncle ami
                                bachelor Hello! Uncle ami bachelor bachelor
                                Hello! Uncle ami bachelor
                            </h1>
                            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
                                hfsdijgokjdsokjgokjdf
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/CWQLVqQ/slider-1.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Hello! Uncle ami bachelor Hello! Uncle ami
                                bachelor Hello! Uncle ami bachelor bachelor
                                Hello! Uncle ami bachelor
                            </h1>
                            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
                                hfsdijgokjdsokjgokjdf
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/5vwmdSF/slider-2.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Hello! Uncle ami bachelor Hello! Uncle ami
                                bachelor Hello! Uncle ami bachelor bachelor
                                Hello! Uncle ami bachelor
                            </h1>
                            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
                                hfsdijgokjdsokjgokjdf
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/Rpms3VD/slider-4.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header
