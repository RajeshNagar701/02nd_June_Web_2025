import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Signup() {

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
    });

    const changeHandel = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(data);
    }


    function validation() {
        var result = true;
        if (data.name == "" || data.name == null) {
            toast.error('Name field is required');
            result = false;
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('email field is required');
            result = false;
            return false;
        }
        if (data.password == "" || data.password == null) {
            toast.error('password field is required');
            result = false;
            return false;
        }
        if (data.mobile == "" || data.mobile == null) {
            toast.error('mobile field is required');
            result = false;
            return false;
        }
        return result;
    }

    const onsubmitHandel = async (e) => {
        e.preventDefault(); // page not refresh/relode
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/customer`, data);
            setData({ ...data, name: "", email: "", password: "", mobile: "" });

            swal({
                title: "Signup Success!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
            return false;
        }
    }

    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Signup Us</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" onSubmit={onsubmitHandel} role="form">
                        <div className="row">
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" value={data.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="password" value={data.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Mobile</label>
                                <input type="number" value={data.mobile} onChange={changeHandel} className="form-control mt-1" id="name" name="mobile" placeholder="Mobile" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Signup</button>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col text-start mt-2">
                            <Link to="/login">If You already registered then Login Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup