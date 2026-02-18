import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Add_user() {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add User</h2>

                        <form action="/action_page.php">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Name:</label>
                                <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">mobile:</label>
                                <input type="mobile" className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                    <label className="form-check-label" htmlFor="radioDefault1">
                                        Block
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" defaultChecked />
                                    <label className="form-check-label" htmlFor="radioDefault2">
                                        Unblock
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Add_user

