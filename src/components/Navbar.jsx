import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MovieApp
          </Typography>
          <Link to={'/add'}><Button style={{color:'white'}}>Add Movie</Button></Link>
          <Link to={'/view'}><Button style={{color:'white'}}>View Movie</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
  )
}

export default Navbar