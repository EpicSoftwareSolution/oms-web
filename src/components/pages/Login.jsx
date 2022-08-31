import React, { Component } from 'react';

import '../styles/Login.scss'

export default class LoginPage extends Component {

    render() {
        return (
            <div className='login-container'>
                <div className="login">

                    <h1 className="text-center">Welcome!</h1>

                    <form className="needs-validation">
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="email">Username</label>
                            <input className="form-control" id="email" required />
                            <div className="invalid-feedback">
                                Please enter correct Username
                            </div>
                        </div>
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" required />
                            <div className="invalid-feedback">
                                Please enter correct password
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" id="check" />
                            <label className="form-check-label" htmlFor="check">Remember me</label>
                        </div>
                        <input className="btn btn-success w-100" type="submit" value="SIGN IN" />
                    </form>

                </div>
            </div>
        );
    }
}