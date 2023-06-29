import Navbar from "../components/navbar.jsx";
import SingleApartment from "../components/singleApartment.jsx";
import React from "react";


const AboutUs = () =>{
    return (
        <div>
            <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
                <div className={"aboutUsImage"}>
                    <p style={{color: "white", fontSize:"70px", marginRight:"40px"}}>ABOUT PJ APARTMENTS</p>
                </div>
                <div style={{padding:"30px",width:"900px",borderRadius:"10px", display:"flex", flexDirection:"column", textAlign:"center"}}>
                    <p style={{fontSize:"50px"}}>PJ APARTMENTS</p>
                    <p style={{marginTop:"0px", fontSize:"1.2em"}}>Modern apartments are conveniently located in the Old Town of Krakow, housed in several tenement houses next to the Royal Route, Florianska Gate, Czartoryski Palace, Wawel Castle and Cloth Hall. They offer free WiFi. All the apartments feature a TV with satellite channels, a fridge and a bathroom. Guests have access to the luggage storage, ironing and laundry services, all available at the apartments office. Airport shuttle can also be arranged. Next to the office you will find a taxi rank and the railway station is 300 metres away. There is a tram and bus stop 200 metres away and parking places within 600 metres.</p>
                </div>
            </div>
        </div>
    )
}


export default AboutUs