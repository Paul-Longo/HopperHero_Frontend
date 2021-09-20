import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap'
import { Redirect } from 'react-router';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submit = async (e) => {
    let res
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/auth/login/', {
      username,
      password,
    }).then((response) => {
      localStorage.setItem('token', response.data.access)
      window.location.reload()
    }, (err) => {
      console.log(err)
    })

    const content = res
    console.log(content)

    setRedirect(true)
    }

    if (redirect) {
        return <Redirect to='/home'/>
    }

  return (

    <Container>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">


          <Form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <input type="text" className="form-control"  placeholder="Username" required 
              onChange={e => setUsername(e.target.value)}/>
              
              <input type="password" className="form-control"  placeholder="Password" required 
              onChange={e => setPassword(e.target.value)}/>

            
            <Button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</Button>
          </Form>


          </div>
          <div class="col-md-3"></div>
      </div>
    </Container>
  )
}

export default Login;