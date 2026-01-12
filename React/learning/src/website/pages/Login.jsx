import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {


    const redirect=useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const changeHandel = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    const onsubmitHandel = async (e) => {
        e.preventDefault(); // page not refresh/relode
        const res = await axios.get(`http://localhost:3000/customer?email=${data.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == data.password) {
                if (res.data[0].status == "Unblock") {

                    //session create
                    sessionStorage.setItem('sid',res.data[0].id);
                    sessionStorage.setItem('sname',res.data[0].name);

                    alert('Login Success!');
                    redirect('/');
                    return false;  
                }
                else {
                    alert('Login Failed Due Blocked Account!');
                    return false;
                }
            }
            else {
                alert('Login Failed Due Wrong Password!');
                return false;
            }
        }
        else {
            alert('Login Failed Due Email does not exist!');
            return false;
        }

    }
    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Login Us</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form" onSubmit={onsubmitHandel}>
                        <div className="row">

                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="password" value={data.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col text-start mt-2">
                            <Link to="/signup">If You not registered then Signup Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login