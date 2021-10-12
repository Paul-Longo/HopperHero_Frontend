import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import { Redirect } from 'react-router';


const Register = () => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [redirect, setRedirect] = useState(false)


    const submit = async(e) => {
      let res
      e.preventDefault()
      let user = {
          username : username,
          password: password,
          email: email,
          first_name: first_name,
          last_name: last_name,
      }
      try{  
         res = await axios.post('http://127.0.0.1:8000/api/auth/register/', user)
         
      }
      catch(err){
        console.log(err)
      }
    
      const content = res
      console.log(content)
      setRedirect(true);

    }
    if (redirect) {
        return <Redirect to='/login' />
    }

  return (

    <Container>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">

          <Form onSubmit={submit}>

          <h1 className="h3 mb-3 fw-normal">Register here:</h1>
                <input type="text" className="form-control"  placeholder="First Name" required 
                onChange={e => setFirstName(e.target.value)}/>

                <input type="text" className="form-control"  placeholder="Last Name" required 
                onChange={e => setLastName(e.target.value)}/>

                <input type="text" className="form-control"  placeholder="Username" required 
                onChange={e => setUsername(e.target.value)}/>
                
                <input type="password" className="form-control"  placeholder="Password" required 
                onChange={e => setPassword(e.target.value)}/>

                <input type="email" className="form-control"  placeholder="Email@example.com" required 
                onChange={e => setEmail(e.target.value)}/>

                <Button className="w-100 btn btn-lg btn-primary" type="submit">Create Account</Button>

          </Form>
          
        </div>
        <div class="col-md-3"></div>
    </div>
    </Container>


      

  )
}

export default Register;

// import axios from 'axios';
// import React, { Component } from 'react';

// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this. state ={
//             username: "",
//             password: "",
//             email: "",
//             first_name: "",
//             last_name: ""
//         }
//     }

//     async makePostRequest() {
//         try{
//             let response = await axios.post('http://127.0.0.1:8000/api/auth/register/')
//             this.setState({
//                 username: response.data,
//                 password: response.data,
//                 email: response.data,
//                 first_name: response.data,
//                 last_name: response.data
//             })
//         }
//         catch(ex) {
//             console.log('Error in API call')
//         }
//     }

//     render() { 
//         return ( 
//             <form>
//                 <lable>Username</lable>
//                 <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username" />

//                 <lable>Password</lable>
//                 <input type="text" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />

//                 <lable>Email</lable>
//                 <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="email" />

//                 <lable>First Name</lable>
//                 <input type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name} placeholder="First Name" />

//                 <lable>Last Name</lable>
//                 <input type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name} placeholder="Last Name" />

//                 <button onClick={this.handleSubmit}>Submit</button>                       
//             </form>
//          );
//     }
// }

// export default Register;