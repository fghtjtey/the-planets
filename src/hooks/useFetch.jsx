import { useEffect, useState } from "react"


function useFetch() {
    const [data, setData] = useState(null)
    const [isPanding, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    async function getData() {
        setIsPending(true)
        try {
            const response = await fetch("http://localhost:3000/planets")
            if(!response.ok) {
                throw new Error("Ma'lumot noto'g'ri keldi!")
            }
             const data = await response.json()
             setData(data)
             setIsPending(false)
        }catch(error) {
            setError(error.message)
            setIsPending(false)
        }
    }

    useEffect(()=> {
        getData()
    }, [])

  return {data, isPanding, error}
}

export default useFetch