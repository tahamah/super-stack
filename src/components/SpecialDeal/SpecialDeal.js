import React from 'react'
import BeforeAfterSlider from 'react-before-after-slider'

const SpecialDeal = () => {
    const before =
        'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    const after =
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    return (
        <div className="md:h-[110vh] relative bg-[#F3EFEC]">
            <div>
                <h1 className="text-6xl  text-white  text-center pt-40 font-bold">
                    Special Deal
                </h1>
                <div className="-rotate-12 md:mt-0 mt-28 md:absolute left-44 top-44 ">
                    <img
                        className=" -rotate-12"
                        src="https://i.ibb.co/jZRvQcc/5797411-removebg-preview.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row pt-40 gap-10 justify-center">
                <div>
                    <div className="rounded-2 mx-auto max-w-[316px] border-yellow-400 border-8">
                        <BeforeAfterSlider
                            before={before}
                            after={after}
                            width={300}
                            height={480}
                        />
                    </div>
                    <p className="text-center">10% off</p>
                </div>
                <div>
                    <div className="rounded-2 mx-auto max-w-[316px] border-white border-8">
                        <BeforeAfterSlider
                            before={before}
                            after={after}
                            width={300}
                            height={480}
                        />
                    </div>
                    <p className="text-center">10% off</p>
                </div>
                <div>
                    <div className="rounded-2 mx-auto max-w-[316px] border-yellow-400 border-8">
                        <BeforeAfterSlider
                            before={before}
                            after={after}
                            width={300}
                            height={480}
                        />
                    </div>
                    <p className="text-center">10% off</p>
                </div>
            </div>
        </div>
    )
}

export default SpecialDeal
