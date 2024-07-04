import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Addmovie = () => {
  const [page,setPage]=useState('movieApp')
  const[form,setForm]=useState({})
  Name:''
  Desc:''
  Dir:''
  function addMovie(e){
    console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  function valueAdd(){
    console.log(form)
  }
    return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}>
      <h1>
        Welcome to {page}!!
      </h1>
    
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Title"
          style={{marginTop :'5%'}}
          name='Name'
          onChange={addMovie}
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="Enabled"
          defaultValue="Image"
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="Description" 
          name='Desc'    
          onChange={addMovie}  
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="Director"
          name='Dir'
          onChange={addMovie}
        />
      </div>
        <Button variant='constrained'>Add Movie</Button>  
    </Box>
  )
}

export default Addmovie