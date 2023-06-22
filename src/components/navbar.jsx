import {AppBar, Toolbar, Typography, Stack, Button} from "@mui/material";

const NavBar = () =>{

    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography component={"div"} sx={{flexGrow:1}}>
                    APARTMENTS WEBSITE
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <a href={'/#/apartments'} style={{color:"white"}}>
                        <Button color={"inherit"}>Apartments</Button>
                    </a>
                    <a href={'/#/contact'} style={{color:"white"}}>
                        <Button color={"inherit"}>Contact</Button>
                    </a>
                    <a href={'/#/aboutus'} style={{color:"white"}}>
                        <Button color={"inherit"}>About Us</Button>
                    </a>
                    <a href={'/#/'} style={{color:"white"}}>
                        <Button color={"inherit"}>main</Button>
                    </a>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar