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


function Header({headerType}) {
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

    const OptionalHeader = () =>{
        if (headerType === "mainHeader"){
            return (
                <>
                    <p style={{color: "white", fontSize:"40px", marginBottom:"-25px", marginRight:"40px"}}>Welcome to</p>
                    <p style={{color: "white", fontSize:"70px", marginTop:"10px", marginBottom:"-25px", marginRight:"40px"}}>PJ APARTMENTS</p>
                    <p style={{color: "white", fontSize:"20px", marginBottom:"30px", marginRight:"40px"}}>Visit the luxury apartments in Kraków</p>
                </>
            )
        }
        else if(headerType === "secondaryHeader") {
            return <p style={{color: "white", fontSize:"70px", marginTop:"10px", marginBottom:"0px", marginRight:"40px"}}>PJ APARTMENTS</p>
        }
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={"headerBox"} style={{width:"100%", height:"80%", display:"flex", justifyContent:"center", alignItems:"flex-end", flexDirection:"column"}}>
                <OptionalHeader/>
                <div className={"header"} style={{marginRight:"40px",width:"800px",padding:"20px",borderRadius:"15px",backgroundColor:"rgba(249, 249, 249, 0.9)", display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
                    <div className={"headerTop"} style={{display:"flex", justifyContent:"space-around", width:"100%", alignItems:"center" }}>
                        <DatePicker sx={{input: {color:"rgba(0, 0, 0, 0.6)"}}} onChange={(checkinValue) => CheckinDateHandler(checkinValue)} className={"datePick"} label="Check in" value={checkinDate} minDate={today} disablePast={true}/>
                        <DatePicker sx={{input: {color:"rgba(0, 0, 0, 0.6)"}}} onChange={(checkoutValue) => CheckoutDateHandler(checkoutValue)} label="Check out" value={checkoutDate} minDate={minCheckoutDate} disablePast={true}/>
                        <TextField
                            id="outlined-select-guests"
                            select
                            label="Guests"
                            defaultValue="1"
                            // helperText="Please choose number of guests"
                            onChange={(e) => {setGuests(e.target.value)}}
                            style={{width:"80px"}}
                            InputProps={{
                                    sx: {
                                        color: "rgba(0, 0, 0, 0.6)"
                                    },
                                }}
                        >
                            {Array.from({length: maxPerson},(x,i) => (
                                <MenuItem key={i+1} value={i+1}>
                                    {(i+1).toString()}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button onClick={() => GoToSearchList()} style={{width:"170px", height:"56px", border:"1 px solid red"}} startIcon={<SearchIcon/>} variant="outlined">Find Your stay</Button>
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default Header