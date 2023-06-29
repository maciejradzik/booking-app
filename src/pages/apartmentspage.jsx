import React, {useState, useEffect} from "react";
import '../App.css'
import {useSearchParams} from "react-router-dom";
import SingleApartment from "../components/singleApartment.jsx";
import {mergeDateAndTime} from "@mui/x-date-pickers/internals/utils/date-utils.js";


const Apartmentspage = () =>{

    const [apartmentsData, setApartmentsData] = useState([])
    const [searchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    console.log(params)


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

    console.log(apartmentsData)

    return (
        <>
            {/*// opcjonalnie //*/}
            {/*<Header></Header>*/}
            <div>
                <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    <div className={"apartmentsPageImage"} style={{marginBottom:"50px"}}>
                        <p style={{color: "white", fontSize:"70px", marginRight:"40px"}}>OUR APARTMENTS</p>
                    </div>
                    <p style={{fontSize:"50px", marginBottom:"0px", marginTop:"0px"}}>ROOMS AND APARTMENTS</p>
                    <p style={{fontSize:"25px", marginBottom:"75px"}}>Enjoy your rest in a luxurious space!</p>

                    {
                        apartmentsData.map((el) =>{
                           return <SingleApartment key={el.id} buttonType={"details"} name={el.name} nog={el.NOG} price={el.price} photo={el.photo} size={el.size} beds={el.beds} utilities={el.utilities}></SingleApartment>
                        })
                    }
                </div>
            </div>
        </>
        )

}

export default Apartmentspage