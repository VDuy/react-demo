// import React from 'react';
// import { Button, Container, Grid, Typography, TextField, Avatar, Link } from '@material-ui/core';
// //import axios from 'axios'
// import Cookies from 'js-cookies'
// import api from '../API';


// import SignUp from './SignUp';



// class LogIn extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             password: '',

//             isSignUp: false,

//         }
//     }
//     login = async () => {
//         const result = await api.auth.login(this.state.username, this.state.password);
//         if (result.status) {
//             Cookies.setItem('token', result.token);
//             console.log(Cookies.getItem('token'))
//             window.location = '/'
//         } else {
//             console.log("oklb")
//             alert(result.message);
//         }
//         console.log("asdfs")
//     }

//     signup = async () => {
//         this.setState({
//             isSignUp: true
//         })
//     }
//     //props
//     render() {
//         if (this.state.isSignUp) {
//             return (<SignUp />)
//         } else {
//             return (
//                 <Container component="main" maxWidth="xs">
//                     <div style={{
//                         marginTop: 50,
//                         display: "flex",
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         alignContent: 'center'
//                     }}>
//                         <Avatar style={{
//                             margin: 10,
//                             backgroundColor: "Background",
//                         }}>

//                         </Avatar>
//                         <Typography variant='h4' component='h1'>
//                             LOG IN</Typography>

//                         <Grid item xs={12}>
//                             <TextField variant='outlined'
//                                 margin='dense'
//                                 label={'Username'}
//                                 fullWidth
//                                 value={this.state.username}
//                                 onChange={(e) => {
//                                     this.setState({ username: e.target.value })
//                                 }}
//                             ></TextField>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField variant='outlined' margin='dense' label={'Password'} type='password' fullWidth
//                                 value={this.state.password}
//                                 onChange={(e) => {
//                                     this.setState({ password: e.target.value })
//                                 }}
//                             ></TextField>
//                         </Grid>

//                         <Button
//                             variant="contained"
//                             color="inherit"
//                             Width
//                             onClick={() => {
//                                 this.login()
//                             }}
//                         >Log in</Button>

//                         <Link
//                             component='button'
//                             variant='body2'
//                             color='primary'
//                             onClick={this.signup}>
//                             Don't have account?
//                         </Link>

//                     </div>

//                 </Container>
//             )
//         }
//     }

// }
// export default LogIn;
