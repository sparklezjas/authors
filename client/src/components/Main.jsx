import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Main = () => {
    const [ allAuthors, setAllAuthors ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allAuthors')
        .then((res) => {
          console.log(res)
          setAllAuthors(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
  }, [])

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
        .then((res) => {
          setAllAuthors((prevAuthors)=>
          prevAuthors.filter((author) => author._id !==id))
        })
        .catch((err) => {
            console.log(err)
        })
}
  return (
    <div>
        <Link style={{marginLeft: "30px"}} to={`/api/newAuthor`}>Add an author</Link>
        <p style={{margin: "30px"}}>We have quotes by:</p>
        <TableContainer component={Paper} style={{width:"400px", marginLeft:"30px"}}>
      <Table>
        <TableHead style={{backgroundColor: "lightGrey"}}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{fontWeight: "bold"}}>Authors</TableCell>
            <TableCell></TableCell>
            <TableCell style={{fontWeight: "bold"}}>Actions Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAuthors.map((author) => (
            <TableRow
              key={author.name}>
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell>{author.name}</TableCell>
              <TableCell></TableCell>
              <TableCell><Link to={`/updateAuthor/${author._id}`}><button style={{backgroundColor: '#5085b3', color: "white", borderRadius: "5px", border: "none", padding: "10px 20px"}}>Edit</button></Link><button onClick={() => deleteHandler(author._id)} style={{backgroundColor: "lightCoral", color: "white", borderRadius: "5px", border: "none", padding: "10px 15px", margin: "0px 15px"}}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
          
export default Main