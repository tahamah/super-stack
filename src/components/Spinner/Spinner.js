import React from 'react'

const Spinner = () => {
    return (
        <div className="h-full min-h-screen w-[100vw] bg-[#171C1D]">
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
