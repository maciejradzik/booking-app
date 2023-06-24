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


const SingleApartment = ({name, nog, price, photo, size, beds, utilities, checkin, checkout, guests}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const data1 = dayjs(checkin)
    const data2 = dayjs(checkout)

    const dataDifference  = data2.diff(data1, 'day')

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

    return (
        <>
                <div style={{width:"1040px", height:"220px",borderRadius:"10px", backgroundColor:"white", margin:"10px", display:"flex"}}>
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
                                <Button variant="outlined" onClick={handleClickOpen}>
                                    Ask about price
                                </Button>
                                <Dialog open={open} onClose={handleClose}>
                                    <DialogTitle>{name} query details</DialogTitle>
                                    <DialogContent>
                                        <div>
                                            <p>You want to make querry for {name}</p>
                                            <p>Check in: {data1.format("DD/MM/YYYY")}</p>
                                            <p>Check out: {data2.format("DD/MM/YYYY")}</p>
                                            <p>Total number of night: {dataDifference}</p>
                                            <p>Total number of guests: {guests}</p>
                                            <p>Price per night: {price} PLN </p>
                                            <p>Total price: {price*dataDifference} PLN</p>
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
