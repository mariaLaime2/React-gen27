import axios from "axios"
import { useState } from "react"


const useFetch = () => {
    const baseUrl="https://e-commerce-api-v2.academlo.tech/api/v1"
    const [infoApi, setInfoApi] = useState()
    const getApi =(path = "")=>{
        const url = `${baseUrl}${path}`
        axios.get(url)
        .then(resp=> setInfoApi(resp.data))
        .catch(error=>console.log(error))
    }
    return [infoApi, getApi]
}

export default useFetch