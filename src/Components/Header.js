import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({check, change}) {

    return (
        <div className={check ? "dark" + " " + "heading" : "heading"}>
            <h1>Keeper</h1>
            
            <FormControlLabel
          value="end"
          control={ <Switch 
            color='default'
            type="checkbox"
            checked={check}
            onChange={change}
        
            
        />}
          label={check ? <LightModeIcon/> : <DarkModeIcon/>}
          labelPlacement={check ? "start" : "end"}
        />
    
        </div>
    )
}

export default Header;

