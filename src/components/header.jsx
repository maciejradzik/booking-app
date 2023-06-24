// import { useState } from 'react'
// import '../App.css'
// import React from "react";
// import dayjs from "dayjs";
// import {DatePicker} from "@mui/x-date-pickers";
// import {MenuItem, TextField} from "@mui/material";
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import {Link} from 'react-router-dom';
// import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
//
// const maxPerson = 10;
//
// function Header() {
//     const [checkin, setCheckin] = useState(dayjs(new Date()))
//     const [minCheckout, setMinCheckout] = useState(dayjs(new Date()).add(1, 'day'))
//     const [checkout, setCheckOut] = useState(minCheckout)
//     const [guests, setGuests] = useState(1)
//
//
//     const functionChecker = (newCheckin) =>{
//         setCheckin(newCheckin)
//         setMinCheckout(newCheckin.add(1, 'day'))
//     }
//
//     const SearchFunction = () =>{
//         console.log(checkin,checkout, guests)
//
//     }
//
//
//     return (
//         <div className={"headerBox"} style={{width:"100%", height:"80%", display:"flex", justifyContent:"center", alignItems:"center"}}>
//             <div className={"header"} style={{width:"800px", height:"300px", backgroundColor:"rgba(255, 255, 255, 0.9)", borderRadius:"15px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
//                 <h1>Welcome to PJ Apartments</h1>
//                 <div className={"headerTop"} style={{display:"flex", justifyContent:"space-around", width:"750px"}}>
//                     <DatePicker label="Check in" className={"datePick"} onChange={functionChecker} value={checkin} disablePast={true} defaultValue={dayjs(new Date())}/>
//                     <DatePicker onChange={setCheckOut} label= "Check out" value={minCheckout} disablePast={true} minDate={minCheckout} defaultValue={dayjs(new Date()).add(1,"day")}/>
//                     <TextField
//                         id="outlined-select-guests"
//                         select
//                         label="Number of guests"
//                         defaultValue="1"
//                         helperText="Please choose number of guests"
//                         onChange={(e) => {setGuests(e.target.value)}}
//                     >
//                         {Array.from({length: maxPerson},(x,i) => (
//                             <MenuItem key={i+1} value={i+1}>
//                                 {(i+1).toString()}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                 </div>
//                 <div className={"headerBottom"} style={{display:"flex", justifyContent:"center"}}>
//                     <Button component={Link} to={`/search?checkin=${checkin.toString()}&checkout=${checkout.toString()}&guests=${guests}`} onClick={SearchFunction} style={{width:"170px", height:"50px"}} startIcon={<SearchIcon/>} variant="outlined">Find Your stay</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Header


import { useState } from 'react'
import '../App.css'
import React from "react";
import dayjs from "dayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {MenuItem, TextField} from "@mui/material";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {Link, Navigate, useNavigate, createSearchParams} from 'react-router-dom';
import { Create } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function Header() {
    const navigate = useNavigate();
    const maxPerson = 10;
    const today = new dayjs()

    const [checkinDate, setCheckinDate] = useState(today)
    const [minCheckoutDate, setMinCheckoutDate] = useState(today.add(1, 'day'))
    const [checkoutDate, setCheckoutDate] = useState(today.add(1, 'day'))
    const [guests, setGuests] = useState(1)

    const CheckinDateHandler = (newCheckinDate) => {
        setCheckinDate(newCheckinDate.startOf('day'))
        setMinCheckoutDate(newCheckinDate.add(1, 'day'))
        if (!checkoutDate.isAfter(newCheckinDate, 'day')){
            setCheckoutDate(newCheckinDate.add(1, 'day'))
        }
    }

    const CheckoutDateHandler = (newCheckoutDate) => {
        setCheckoutDate(newCheckoutDate.startOf('day'))
    }

    const GoToSearchList = (params) => {
        console.log('new')
        console.log(checkinDate, checkoutDate, guests)
        navigate({
            pathname: '/search',
            search: `?${createSearchParams({checkin: checkinDate.format("DD/MM/YYYY"), checkout: checkoutDate.format("DD/MM/YYYY"), guests: guests})}`
        });
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={"headerBox"} style={{width:"100%", height:"80%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className={"header"} style={{width:"800px", height:"300px", backgroundColor:"rgba(255, 255, 255, 0.9)", borderRadius:"15px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
                    <h1>Welcome to PJ Apartments </h1>
                    <div className={"headerTop"} style={{display:"flex", justifyContent:"space-around", width:"750px"}}>
                        <DatePicker onChange={(checkinValue) => CheckinDateHandler(checkinValue)} label="Check in" className={"datePick"} value={checkinDate} minDate={today} disablePast={true}/>
                        <DatePicker onChange={(checkoutValue) => CheckoutDateHandler(checkoutValue)} label="Check out" value={checkoutDate} minDate={minCheckoutDate} disablePast={true}/>
                        <TextField
                            id="outlined-select-guests"
                            select
                            label="Number of guests"
                            defaultValue="1"
                            helperText="Please choose number of guests"
                            onChange={(e) => {setGuests(e.target.value)}}
                        >
                            {Array.from({length: maxPerson},(x,i) => (
                                <MenuItem key={i+1} value={i+1}>
                                    {(i+1).toString()}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className={"headerBottom"} style={{display:"flex", justifyContent:"center"}}>
                        <Button onClick={() => GoToSearchList()} style={{width:"170px", height:"50px"}} startIcon={<SearchIcon/>} variant="outlined">Find Your stay</Button>
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default Header