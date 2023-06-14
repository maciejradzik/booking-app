import { useState } from 'react'
import '../App.css'
import {DatePicker} from "@mui/x-date-pickers";
import {MenuItem, TextField} from "@mui/material";

const maxPerson = 10;





function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div style={{display:"inline"}}>
                <DatePicker sx={{outlineColor:"blue"}}/>
                <DatePicker/>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="1"
                    helperText="Please choose number of guests"
                >
                    {Array.from({length: maxPerson},(x,i) => (
                        <MenuItem key={i+1} value={i+1}>
                            {(i+1).toString()}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

        </>
    )
}

export default Header
