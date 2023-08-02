import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
 const [infoApi, setInfoApi] = useState()
 const getApi=()=>{
    axios.get(url)
    .then(resp=> setInfoApi(resp.data))
    .catch(error=>console.log(error))
 }
 const getTypeApi=(urlType)=>{
   axios.get(urlType)
   .then(resp=>{
      const obj ={
         results: resp.data.pokemon.map(e => e.pokemon)
      }
      setInfoApi(obj)
   })
   .catch(err=>console.log(err))
 }
 return [infoApi,getApi,getTypeApi]
}

export default useFetch