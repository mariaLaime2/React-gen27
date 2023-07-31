import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
 const [infoApi, setInfoApi] = useState()
 const getApi=()=>{
    axios.get(url)
    .then(resp=> setInfoApi(resp.data))
    .catch(error=>console.log(error))
 }
 return [infoApi,getApi]
}

export default useFetch