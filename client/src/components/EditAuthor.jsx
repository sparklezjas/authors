import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditAuthor = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const {id} = useParams()

  const submitHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/updateAuthor/${id}`, {name})
      .then((res) => {
        console.log(res.data)
        setName('')
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response);
        const errorData = err.response.data;
        if (errorData.errors && errorData.errors.name) {
          setErrors({ name: { message: errorData.errors.name.message } });
        } else {
          setErrors({});
        }
      });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const cancelHandler = () => {
    navigate('/');
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
      .then((res) => {
        setName(res.data.name)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link style={{ marginLeft: '30px' }} to={'/'}>Home</Link>
      </div>
      <p style={{ marginLeft: '30px' }}>Edit this author:</p>
      <div>
        <form style={{border: "solid black 1px", margin: "30px", padding: "20px", width: "330px", height: "120px"}} onSubmit={submitHandler}>
          <label style={{ margin: '10px' }}>Name:</label>
          <br/>
              <input
      style={{ height: '20px', width: '300px', margin: '10px' }}
      type="text"
      onChange={handleChange}
      value={name}
    />
          {errors.name ? (
            <p style={{ color: 'red' }}>{errors.name.message}</p>
          ) : null}
          <br />
          <button
          style={{ backgroundColor: '#5085b3', color: "white", fontWeight: "bold",  borderRadius: '5px', border: 'none', padding: '10px 15px', margin: '0px 10px'}}
          type="submit">Submit</button>
          <button
            style={{ backgroundColor: 'lightCoral', color: "white", fontWeight: "bold", borderRadius: '5px', border: 'none', padding: '10px 15px', margin: '0px 15px'}}
            onClick={cancelHandler}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default EditAuthor
