import '../App.css'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';



const SingleApartment = ({name, nog, price, photo, size, beds, utilities}) => {
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
                            <button>Ask for the price</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleApartment
