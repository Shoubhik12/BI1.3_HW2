import { useState } from "react"
import useFetch from "../useFetch"

const Hotel=()=>{
    const {data,loading,error} = useFetch("https://hotels-sepia.vercel.app/hotels")
    const [successMessage , setSuccessMessage] = useState("")
    const handleDelete = async (movieId)=>{
        try {
            const response = await fetch(`https://hotels-sepia.vercel.app/hotels/${movieId}`,{
                method:"Delete"
            })
            if(!response.ok){
                throw "Hotel not deleted."
            }

           const data = await response.json()

           if(data){
              setSuccessMessage("Hotel deleted successfully.")
              window.location.reload()
           }

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <h1>Hotels </h1>
            {
                data? data.map((hotel)=><li>Name:{hotel.name}{"  "}
                  <button onClick={()=>handleDelete(hotel._id)} >Delete</button><p>{successMessage}</p> 
                </li> ): loading && <p>Loading...</p>
            }
        </div>
    )
}


export default Hotel