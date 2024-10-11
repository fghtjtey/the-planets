import { useEffect, useState } from "react"


function useFetch() {
    const [data, setData] = useState(null)
    const [isPanding, setIsPanding] = useState(false)
    const [error, setError] = useState(false)

    async function getData() {
        setIsPanding(true)
        try {
            const response = await fatch("http://localhost:3000/planets")
            if(!response.ok) {
                throw new Error("Ma'lumot noto'g'ri keldi!")
            }
             const data = await response.json()
             setData(data)
             setIsPanding(false)
        }catch(error) {
            setError(error.message)
            setIsPanding(false)
        }
    }

    useEffect(()=> {
        getData()
    }, [])

  return {data, isPanding, error}
}

export default useFetch