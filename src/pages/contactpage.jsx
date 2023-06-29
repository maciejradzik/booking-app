import Navbar from "../components/navbar.jsx";
import React from "react";
import {useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search.js";


const Contactpage = () =>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }







    return (
        <div>
            <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
                <div className={"contactImage"}>
                    <p style={{color: "white", fontSize:"70px", marginRight:"40px"}}>CONTACT US</p>
                </div>
                <div style={{padding:"30px",width:"1000px",borderRadius:"10px", display:"flex", flexDirection:"column", textAlign:"center"}}>
                    <p style={{fontSize:"50px", marginBottom:"70px"}}>We will be happy to answer all your queries.</p>
                    <div className={"contactTop"} style={{display:"flex", justifyContent:"space-between"}}>
                        <div className={"contactTopLeft"} style={{textAlign:"left"}}>
                            <p style={{fontSize:"30px", marginTop:"-10px"}}>PJ APARTMENTS</p>
                            <p style={{marginBottom:"-15px"}}>ul. Lubicz 17</p>
                            <p style={{marginBottom:"0px"}}>31-019 Kraków, PL</p>
                            <p style={{marginBottom:"0px"}}>+48 660 623 521</p>
                            <a style={{color:"inherit", fontWeight:"normal"}} href={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=recepcja@pjapartments.com"}>recepcja@pjapartments.com  </a>
                        </div>
                        <div className={"contactTopRight"}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1652176503776!2d19.946704076155584!3d50.06446741508083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b175713a453%3A0xa25eadc377b6a7!2sLubicz%2017%2C%2031-034%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1687957452775!5m2!1spl!2spl"
                                width="550"
                                height="400"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                    <div className={"contactBottom"}>
                        <p style={{fontSize:"50px", marginBottom:"70px"}}>Write to us</p>
                        <form style={{display:"flex", flexDirection:"row", width:"1000px", justifyContent:"space-between"}} onSubmit={handleSubmit(onSubmit)}>
                            <div className={"formLeftSide"} style={{display:"flex", flexDirection:"column", width:"450px"}}>
                                <TextField
                                    id="standard-basic"
                                    label="Name and surname"
                                    name="NameAndS"
                                    variant="standard"
                                    {...register("NameAndS", {required: "Name and surname is required"})}
                                    error={Boolean(errors.NameAndS)}
                                    helperText={errors.NameAndS?.message}
                                    style={{marginBottom:"20px"}}
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Phone"
                                    variant="standard"
                                    name="Phone"
                                    type="number"
                                    {...register("Phone", {required: "Phone is required"})}
                                    error={Boolean(errors.Phone)}
                                    helperText={errors.Phone?.message}
                                    className={"phoneClass"}
                                    style={{marginBottom:"20px"}}

                                />

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    name="Email"
                                    {...register("Email", {required: "E-mail is required"})}
                                    error={Boolean(errors.Email)}
                                    helperText={errors.Email?.message}
                                    style={{marginBottom:"20px"}}
                                />
                            </div>
                            <div className={"formRightSide"} style={{width:"450px", display:"flex", flexDirection:"column"}}>
                                <TextField
                                    id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    name="Message"
                                    {...register("Message", {required: "Message is required"})}
                                    error={Boolean(errors.Message)}
                                    helperText={errors.Message?.message}
                                    style={{marginBottom:"20px"}}
                                />
                                <Button type={"submit"} onClick={onSubmit} style={{width:"170px", height:"56px", marginTop:"0px", marginLeft: "140px"}} startIcon={<SearchIcon/>} variant="outlined">ASK!</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Contactpage