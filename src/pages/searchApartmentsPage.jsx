import React, {useState, useEffect} from "react";
import '../App.css'
import {useSearchParams} from "react-router-dom";
import SingleApartment from "../components/singleApartment.jsx";
import {mergeDateAndTime} from "@mui/x-date-pickers/internals/utils/date-utils.js";
import Header from "../components/header.jsx";



const SearchApartmentsPage = () =>{

    const [apartmentsData, setApartmentsData] = useState([])
    const [searchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    // console.log(params)


    const getApartmentsSearch = (successCallback) => {
        fetch('http://localhost:3000/apartments')
            .then((r) => r.json())
            .then((data) => {
                if (typeof successCallback === "function") {
                    successCallback(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() =>{
        getApartmentsSearch((data) => {
            setApartmentsData(data);
        });
    },[])

    const numberToFilter = params.guests

    const apartmentsFilteredData = apartmentsData.filter((guestsNumber)=>{
        return guestsNumber.NOG >= numberToFilter
    })

    console.log(apartmentsFilteredData)

    const ApartmentWordChecker = () =>{
        if (apartmentsFilteredData.length <= 1){
            return `apartment`
        } else {
            return `apartments`
        }
    }



    return (
        <div style={{height:"100vh"}}>
            <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
                <div className={"searchImage"}>
                    <Header headerType={"secondaryHeader"}></Header>
                </div>
            </div>
            <div>
                <p style={{textAlign:"center", fontSize:"20px", marginTop:"50px", marginBottom:"50px"}}> From {params.checkin} to {params.checkout} we have {apartmentsFilteredData.length} available <ApartmentWordChecker/> </p>
                <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    {
                        apartmentsFilteredData.map((el) =>{
                            return <SingleApartment key={el.id} buttonType={"asking"} guests={params.guests} checkin={params.checkin} checkout={params.checkout} name={el.name} nog={el.NOG} price={el.price} photo={el.photo} size={el.size} beds={el.beds} utilities={el.utilities}/>
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default SearchApartmentsPage