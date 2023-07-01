import React, {useState, useEffect} from "react";
import '../App.css'
import {useSearchParams} from "react-router-dom";
import SingleApartment from "../components/singleApartment.jsx";
import {mergeDateAndTime} from "@mui/x-date-pickers/internals/utils/date-utils.js";
import { Button } from "@mui/material";


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

    // console.log(apartmentsData[0].type)

    

    // const ApartmentType = () =>{
    //     let apartmentsTypeFiltered
    //     if (params.type === "studio"){
    //         apartmentsTypeFiltered = apartmentsData.filter((apType)=>{
    //             return apType.type === "studio"})
    //         console.log(apartmentsTypeFiltered)
    //     }
    // }

    // const ApartmentType = () =>{
        // return (
        //         apartmentsData.map((el) =>{
        //            return <SingleApartment key={el.id} buttonType={"details"} name={el.name} nog={el.NOG} price={el.price} photo={el.photo} size={el.size} beds={el.beds} utilities={el.utilities}></SingleApartment>
        //         })
        // )
        // return <p>Elo</p>
    // }


    // const click = () =>{
    //     console.log("klik")
    // }

    // for (let i=0; i < apartmentsData.length; i++){
    //     console.log(apartmentsData[i].type)
    // }

    // const getStudio = () =>{
    //     const apartmentsFiltered = apartmentsData.filter((typeA)=>{
    //         return typeA.type === "studio"
    //     })
    //     setApartmentsData(apartmentsFiltered)
    // }   

    // const getOneBed = () =>{
    //     const apartmentsFiltered = apartmentsData.filter((typeA)=>{
    //         return typeA.type === "onebed"
    //     })
    //     setApartmentsData(apartmentsFiltered)
    // }
    
    // const getOdd = () =>{
    //     setValue(prevState => {
    //         return prevState.filter(n => n%2 !== 0) })
    // }
    


    console.log(apartmentsData)

    const getList = event =>{
        console.log(event.currentTarget.id)
    }


    const getAps = event => {
        if (event.currentTarget.id === "2"){
            const apartmentsFiltered = apartmentsData.filter((typeA)=>{
            return typeA.type === "studio"
        })
        setApartmentsData(apartmentsFiltered)
        console.log(apartmentsFiltered)
        }
        else if (event.currentTarget.id === "3"){
            const apartmentsFiltered = apartmentsData.filter((typeA)=>{
            return typeA.type === "onebed"
        })
        setApartmentsData(apartmentsFiltered)
        }

    }
    

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
                    {/* <div>
                        <Button id="1" onClick={getList}>All</Button>
                        <Button id ="2" onClick={getList}>Studio</Button>
                        <Button id = "3" onClick={getList}>One bedroom</Button> 
                    </div> */}
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