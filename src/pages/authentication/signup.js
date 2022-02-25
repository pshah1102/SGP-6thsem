// import { Avatar, Grid, Paper, Radio, TextField, Typography } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { Checkbox, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/material';
import { Container, Box } from '@mui/material';
//import Checkbox from '@mui/material/Checkbox';
import React from "react";
import { margin, padding } from '@mui/system';
const Signup=()=>{
const paperStyle={padding:'25px 15px',width:300,margin:"20px auto", marginTop:'50px'}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'#1bbd7e'}
    return(
        <Container>
        <Box sx={{height: '120vh', backgroundColor:'#1bdd7d'}}>
        <Paper  elevation={20} style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}>
                 </Avatar>
                 <h2 style={headerStyle}>Sign up</h2>
                 <Typography variant='caption'>Please fill all the required details</Typography>
                 </Grid>
                 <TextField fullwidth label='Name'/>
                 <TextField fullwidth label='Email'/>
                 <TextField fullwidth label ='Phone number'/>
                 <TextField fullwidth type='password' label='Password'/>
                 <TextField fullwidth type='password' label='Confirm Password'/>
                 <FormGroup>
                  <FormControlLabel control={<Checkbox/>}label="Terms and Conditions" />   
                  </FormGroup>
              <Button type='submit' variant='contained'>Submit</Button>
            </Paper>
            </Box>
        <Grid>
                       
        </Grid>
        </Container>
    )
}
export default Signup;