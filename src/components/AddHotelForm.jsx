import { useState } from "react"

const AddHotelForm=()=>{
 
    const [formData ,setFormData] = useState({
        name:"",
        category:"",
        location:"",
        rating:"",
        review:"",
        website:"",
        phoneNumber:"",
        checkInTime:"",
        checkOutTime:"",
        amenities:"",
        priceRange:"",
        reservationsNeeded:"",
        isParkingAvailable:"",
        isWifiAvailable:"",
        isPoolAvailable:"",
        isSpaAvailable:"",
        isRestaurantAvailable:"",
        photos:""
    })

    const handleChange=(e)=>{
        const {name,type,value,checked} = e.target
        setFormData((prevData)=>({
            ...prevData,
            [name]: type=="checkbox"? checked :name=="rating"?parseInt(value):value
        }))
    }


    const handleSubmit=  async(event)=>{
        event.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/hotels",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(formData)
            })

            if(!response.ok){
                throw "Failed to add a hotel"
            }

            const data = await response.json()

            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <h1>Add a Hotel</h1>
            <form onSubmit={handleSubmit}>
                 <label htmlFor="name">Name:</label><br />
                 <input type="text" name="name" value={formData.name} onChange={handleChange} /><br /><br />
                 <label htmlFor="category">Category</label><br />
                 <select name="category" value={formData.category} onChange={handleChange} >
                     <option value="Budget">Budget</option>
                     <option value="MidRange">MidRange</option>
                     <option value="Luxury">Luxury</option>
                     <option value="Boutique">Boutique</option>
                     <option value="Resort">Resort</option>
                     <option value="Other">Other</option>
                 </select><br /><br />
                 <label htmlFor="location">Location:</label><br />
                 <input type="text" name="location" value={formData.location} onChange={handleChange} /><br /><br />
                 <label htmlFor="rating">Rating:</label><br />
                 <input type="number" name="rating" value={formData.rating} onChange={handleChange} /><br /><br />
                 <label htmlFor="website">Website:</label><br />
                 <input type="text" name="website" value={formData.website} onChange={handleChange} /><br /><br />
                 <label htmlFor="phoneNumber">Phone Number:</label><br />
                 <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /><br /><br />
                 <label htmlFor="checkInTime">Check In Time:</label><br />
                 <input type="text" name="checkInTime" value={formData.checkInTime} onChange={handleChange} /><br /><br />
                 <label htmlFor="checkOutTime">Check Out Time:</label><br />
                 <input type="text" name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} /><br /><br />
                 <label htmlFor="amenities">Amenities:</label><br />
                 <input type="text" name="amenities" value={formData.amenities} onChange={handleChange} /><br /><br />
                 <label htmlFor="priceRange">Price Range:</label><br />
                 <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
                    <option value="$$(11-30)">11-30</option>
                    <option value="$$$(31-60)">31-60</option>
                    <option value="$$$$(61+)">61+</option>
                    <option value="Other">Other</option>
                 </select><br />
                 <label htmlFor="reservationsNeeded">Reservations Needed:</label>
                 <input type="checkbox" name="reservationsNeeded" value={formData.reservationsNeeded} onChange={handleChange} /><br /><br />
                 <label htmlFor="isParkingAvailable">Is Parking Available:</label>
                 <input type="checkbox" name="isParkingAvailable" value={formData.isParkingAvailable} onChange={handleChange} /><br /><br />
                 <label htmlFor="isWifiAvailable">Is Wifi Available:</label>
                 <input type="checkbox" name="isWifiAvailable" value={formData.isWifiAvailable} onChange={handleChange} /><br /><br />
                 <label htmlFor="isPoolAvailable">Is Pool Available:</label>
                 <input type="checkbox" name="isPoolAvailable" value={formData.isPoolAvailable} onChange={handleChange} /><br /><br />
                 <label htmlFor="isSpaAvailable">Is Spa Available:</label>
                 <input type="checkbox" name="isSpaAvailable" value={formData.isSpaAvailable} onChange={handleChange} /><br /><br />
                 <label htmlFor="isRestaurantAvailable">Is Restaurant Available:</label>
                 <input type="checkbox" name="isRestaurantAvailable" value={formData.isRestaurantAvailable} onChange={handleChange}  /><br /><br />
                 <label htmlFor="photos">Photos:</label><br />
                 <input type="text" name="photos" value={formData.photos} onChange={handleChange} /><br /><br />
                 <button type="submit" >Submit</button>
            </form>
        </div>
    )


}


export default AddHotelForm