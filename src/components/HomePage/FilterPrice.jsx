import { useState } from "react";
import "./styles/FilterPrice.css"
import { useForm } from "react-hook-form";


const FilterPrice = ({setFromTo}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const {register,reset,handleSubmit}=useForm()
    const submit= data =>{
     const from = Number(data.from.trim())
     const to = +data.to.trim()
     const obj={
      from: from || 0,
      to: to|| Infinity
     }
     setFromTo(obj)
    }

    const toggleForm = () => {
      
  setIsFormOpen(!isFormOpen);
    };
  
  return (
    <article className="article-container">
        <h3 style={{ fontSize:"15px" ,color:"rgb(61,60,60)"}} className={`toggle-h3 ${isFormOpen ? 'open' : ''}`} onClick={toggleForm}>Price<i className='bx bxs-down-arrow'></i> </h3>
        <hr />
        <form onSubmit={handleSubmit(submit)} className={`toggle-form ${isFormOpen ? 'open' : ''}`} action="" >
         <div>
            <label htmlFor="from">From</label>
            <input {...register("from")} type="text" id="from" />
         </div>
         <div>
            <label htmlFor="to">To</label>
            <input {...register("to")} type="text" id="to" />
         </div>
         <button>Filter Price</button>
        </form>
    </article>
  )
}

export default FilterPrice