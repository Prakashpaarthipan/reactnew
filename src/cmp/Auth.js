import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            mode: false
        };
        //localStorage.clear();
        //console.log(this.state.mode)
    }
    frmLogin = () => {
        console.log("Clicked");
        console.log(this.state)
        localStorage.setItem('user', this.state.username);
        localStorage.setItem('pass', this.state.password);
        localStorage.setItem('access', this.state.username && this.state.password ? 'secretToken' : false);

    }
    changeRegister = () => {
        this.setState({ mode: true })
    }
    changeLogin = () => {
        this.setState({ mode: false })
    }
    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        var auth = localStorage.getItem('access');
        return (
            <div>
                {
                    auth === 'secretToken' ? <Navigate to="home" /> : null
                }
                {
                    !this.state.mode ?
                        <div>
                            <h1>Login Form</h1>
                            <input type="text" placeholder='Username' name="username" onChange={this.handleChanges} />
                            <input type="text" placeholder='Password' name="password" onChange={this.handleChanges} />
                            <button onClick={this.frmLogin}>Login</button><button onClick={this.changeRegister}>Go to Register</button>
                        </div>
                        : <div>    <h1>Register Form</h1>
                            <input type="text" placeholder='Username' name="username" onChange={this.handleChanges} />
                            <input type="text" placeholder='Password' name="password" onChange={this.handleChanges} />
                            <button onClick={this.frmRegister}>Submit</button><button onClick={this.changeLogin}>Go to Login</button>
                        </div>
                }
            </div>
        )
    }
}
