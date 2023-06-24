import React, {useState, useEffect} from "react";
import '../App.css'
import {useSearchParams} from "react-router-dom";
import SingleApartment from "../components/singleApartment.jsx";
import {mergeDateAndTime} from "@mui/x-date-pickers/internals/utils/date-utils.js";



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



    return (
        <>
            {/*// opcjonalnie //*/}
            <div>
                {/*<h1>strona z apkami</h1>*/}
                <h2>{params.checkin}</h2>
                <h2>{params.checkout}</h2>
                {/*<h2>{params.guests}</h2>*/}
                <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    {
                        apartmentsFilteredData.map((el) =>{
                            return <SingleApartment key={el.id} buttonType={"asking"} guests={params.guests} checkin={params.checkin} checkout={params.checkout} name={el.name} nog={el.NOG} price={el.price} photo={el.photo} size={el.size} beds={el.beds} utilities={el.utilities}/>
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default SearchApartmentsPage