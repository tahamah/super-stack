import React from 'react'
import PageTitle from '../PageTitle/PageTitle'

const NotFound = () => {
    return (
        <div className="bg-[#FDFDFD] h-[100vh] md:pt-32 pt-44 pd:mb-40">
            <PageTitle title={'Not Found'} />
            <div className="flex justify-center h-[50vh] md:h-[70vh] ">
                <img src="https://i.ibb.co/N1Bd1dX/Page-NOT-FOUND.gif" alt="" />
            </div>
        </div>
    )
}

export default NotFound
