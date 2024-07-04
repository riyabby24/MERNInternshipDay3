import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewmovie = () => {
//  const rows=[{Name:'Mary Poppins',desc:'Disney Movie',dir:'Walt Disney'},
//   {Name:'The Lord of the Rings',desc:'Fantasy',dir:'Percy Jackson'},
//   {Name:'Harry Potter',desc:'Fiction',dir:'Roland'}
// ]
const[rows,setRows]=useState([])
    useEffect(()=>{
    axios.get('https://dummyapi.online/api/movies').then((res)=>{
      setRows(res.data)
    })
  },[])
  return (
 <>
 <div>
  {rows.map((item)=>(
    <Card style={{ marginTop: '5%', borderColor:'black'}}>
      <CardContent>
        <Typography sx={{variant:"h5", fontSize: 14 }} color='black' gutterBottom>
         {item.id}
        </Typography>
        {<Typography variant="h5" component="div">
         {item.movie}
        </Typography> }
        <Typography sx={{ mb: 1.5 }} color='black'>
         {item.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to watchlist</Button>
      </CardActions>
    </Card>
   ))}
   </div>
</>
  )}


export default Viewmovie