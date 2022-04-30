import React from 'react'
import BeforeAfterSlider from 'react-before-after-slider'

const SpecialDeal = () => {
    const before1 = 'https://i.ibb.co/4jbcw5m/3.png'
    const after1 = 'https://i.ibb.co/PhTfHqt/4.png'
    const before2 = 'https://i.ibb.co/QdkZjNj/1.png'
    const after2 = 'https://i.ibb.co/2Z6x9fn/2.png'
    const before3 = 'https://i.ibb.co/6mgtx8M/1.png'
    const after3 = 'https://i.ibb.co/Fxb2MFW/2.png'

    return (
        <div className="md:h-[110vh] relative bg-[#F3EFEC]">
            <div>
                <h1 className="text-6xl  text-green-500  text-center pt-40 font-bold">
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
                            before={before1}
                            after={after1}
                            width={300}
                            height={480}
                        />
                    </div>
                    <p className="text-center">10% off</p>
                </div>
                <div>
                    <div className="rounded-2 mx-auto max-w-[316px] border-gray-300 border-8">
                        <BeforeAfterSlider
                            before={before2}
                            after={after2}
                            width={300}
                            height={480}
                        />
                    </div>
                    <p className="text-center">10% off</p>
                </div>
                <div>
                    <div className="rounded-2 mx-auto max-w-[316px] border-yellow-400 border-8">
                        <BeforeAfterSlider
                            before={before3}
                            after={after3}
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
