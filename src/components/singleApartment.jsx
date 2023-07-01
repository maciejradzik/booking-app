import '../App.css'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import dayjs from "dayjs";
import diff from "dayjs"
import {useForm} from "react-hook-form";


const SingleApartment = ({name, nog, price, photo, size, beds, utilities, checkin, checkout, guests, buttonType}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(checkin)

    const StayLenght = () => {
        if (checkin && checkout) {
            let parts1 = (checkin).split('/');
            console.log(parts1)
            let mydate1 = new Date(parts1[2], parts1[0], parts1[1] - 1);
            console.log(mydate1.toDateString());

            let parts2 = (checkout).split('/');
            let mydate2 = new Date(parts2[2], parts2[0],  parts2[1] - 1);
            console.log(mydate2.toDateString());

            let difference = mydate2 - mydate1
            console.log(difference)

            let difftodays = difference / 86400000
            console.log(difftodays)
            return difftodays
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        if (data.Name.length > 1 && data.Surname.length > 1 && data.Email.length > 1) {
            setOpen(false);
        }

    }

    const OptionalButton = () =>{
        if (buttonType === "asking"){
            return <Button variant="outlined" onClick={handleClickOpen}>Ask about price</Button>
        }
        else if(buttonType === "details"){
            return <Button variant="outlined">Show more details</Button>
        }
    }

    return (
        <>
                <div style={{ boxShadow:"0px 0px 10px #00000029", width:"1040px", height:"220px",borderRadius:"10px", backgroundColor:"white", margin:"10px", display:"flex", marginBottom:"40px"}}>
                    <img src={photo} style={{width: "320px", height: "220px", borderTopLeftRadius:"inherit", borderBottomLeftRadius:"inherit", marginRight:"10px"}}/>
                    {/*<div className={"card-left"} style={{width: "320px", height: "220px", backgroundColor:"red", borderTopLeftRadius:"inherit", borderBottomLeftRadius:"inherit", marginRight:"10px"}}></div>*/}
                    <div className={"card-content"} style={{display:"flex", justifyContent:"space-between", width:"100%", padding:"15px"}}>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}} className={"card-left"}>
                            <h3 style={{marginBottom:"0px"}}>{name}</h3>
                            <div style={{display:"flex", alignItems: 'center', flexWrap: 'wrap', height:"30px"}}>
                                <FullscreenIcon/>
                                <p style={{marginLeft:"10px"}}>{size}</p>
                                <sub>2</sub>
                            </div>
                            <div style={{display:"flex", alignItems: 'center', flexWrap: 'wrap',height:"30px"}}>
                                <HotelIcon/>
                                <p style={{marginLeft:"10px"}}>{beds}</p>
                            </div>
                            <div style={{display:"flex", alignItems: 'center', flexWrap: 'wrap',height:"30px"}}>
                                <PersonIcon/>
                                <p style={{marginLeft:"10px"}}>{nog}</p>
                            </div>
                            <div style={{display:"flex", alignItems: 'center', flexWrap: 'wrap',height:"30px"}}>
                                <CheckIcon/>
                                <p style={{marginLeft:"10px"}}>{utilities}</p>
                            </div>
                        </div>
                        <div className={"card-right"} style={{display:"flex", alignItems: 'center', justifyContent:"center"}}>
                            <div>
                                <OptionalButton/>
                                <Dialog open={open} onClose={handleClose}>
                                    <DialogTitle>{name} query details</DialogTitle>
                                    <DialogContent>
                                        <div>
                                            <p>You want to make querry for {name}</p>
                                            <p>Check in: {checkin}</p>
                                            <p>Check out: {checkout}</p>
                                            <p>Total number of night: {StayLenght()}</p>
                                            <p>Total number of guests: {guests}</p>
                                            <p>Price per night: {price} PLN </p>
                                            <p>Total price: {price*StayLenght()} PLN</p>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <TextField
                                                id="standard-basic"
                                                label="Name"
                                                name="Name"
                                                variant="standard"
                                                style={{marginRight:"20px"}}
                                                {...register("Name", {required: "Name is required"})}
                                                error={Boolean(errors.Name)}
                                                helperText={errors.Name?.message}
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Surname"
                                                variant="standard"
                                                name="Surname"
                                                {...register("Surname", {required: "Surname is required"})}
                                                error={Boolean(errors.Surname)}
                                                helperText={errors.Surname?.message}
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

                                            />
                                            <DialogActions>
                                                <Button onClick={handleClose}>Cancel</Button>
                                                <Button type={"submit"} onClick={onSubmit}>Ask!</Button>
                                            </DialogActions>
                                        </form>
                                    </DialogContent>

                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleApartment
