import { Avatar, Grid, Paper, Typography, TextField, Button } from "@mui/material";
import React from "react";
const Login=()=>{
const paperStyle={padding:'25px 15px',width:300,margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'#1bbd7e'}
    return(
       <Grid align='center'>
           <Paper style={paperStyle}>
               <Avatar style={avatarStyle}>
               </Avatar>
               <h2 style={headerStyle}>Login</h2>
               <Typography variant="caption">Enter your credentials</Typography>
               <TextField fullWidth label='Email'/>
               <TextField fullWidth label='Password' type='password'/>
               <br/>
              <Button type="submit" variant="contained">Submit</Button>
           </Paper>
       </Grid>
    )
}
export default Login;