import { useEffect, useState } from 'react'

const useInventoriesData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://agile-journey-07748.herokuapp.com/fourProducts')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return [data]
}

export default useInventoriesData
