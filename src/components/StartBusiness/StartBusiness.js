import React from 'react'
import BeforeAfterSlider from 'react-before-after-slider'

const StartBusiness = () => {
    const before =
        'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    const after =
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    return (
        <div className="h-[110vh] bg-[#F3EFEC]">
            <div>
                <h1 className="text-6xl text-white text-center pt-40 font-bold">
                    Any Name
                </h1>
            </div>
            <div className="flex pt-40 gap-10 justify-center">
                <div className="rounded-2 border-green-500 border-8">
                    <BeforeAfterSlider
                        before={before}
                        after={after}
                        width={300}
                        height={480}
                    />
                </div>
                <div className="rounded-2 border-white border-8">
                    <BeforeAfterSlider
                        before={before}
                        after={after}
                        width={300}
                        height={480}
                    />
                </div>
                <div className="rounded-2 border-yellow-400 border-8">
                    <BeforeAfterSlider
                        before={before}
                        after={after}
                        width={300}
                        height={480}
                    />
                </div>
            </div>
        </div>
    )
}

export default StartBusiness
