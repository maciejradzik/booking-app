import {AppBar, Toolbar, Typography, Stack, Button} from "@mui/material";

const NavBar = () =>{

    return (
        <AppBar style={{backgroundColor:"rgba(64,76,97,0.0)"}} position={"static"}>
            <Toolbar  style={{display:"flex", justifyContent:"space-between"}}>
                <a className={"navStyle"} href={'/#/'} style={{color:"black", zIndex:"1"}}>

                </a>
                <Stack direction={"row"} spacing={5}>
                    <a href={'/#/apartments'} style={{color:"rgb(64, 76, 97)"}}>
                        <Button className={"navButton"} style={{height:"64px"}} color={"inherit"}>Apartments</Button>
                    </a>
                    <a href={'/#/contact'} style={{color:"rgb(64, 76, 97)"}}>
                        <Button className={"navButton"} style={{height:"64px"}} color={"inherit"}>Contact</Button>
                    </a>
                    <a href={'/#/aboutus'} style={{color:"rgb(64, 76, 97)"}}>
                        <Button className={"navButton"} style={{height:"64px"}} color={"inherit"}>About Us</Button>
                    </a>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar