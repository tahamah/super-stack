import React from 'react'
import { Helmet } from 'react-helmet-async'

const Spinner = () => {
    return (
        <div className="h-full overflow-hidden min-h-screen w-[100vw] bg-[#171C1D]">
            <Helmet>
                <title>Loading . . . .</title>
            </Helmet>
            <div className="flex align-center justify-center">
                <img
                    className="h-[500px] w-[500px]  "
                    src="https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Spinner
