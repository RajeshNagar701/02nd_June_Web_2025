import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Manage_user() {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Manage User</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>john@example.com</td>
                                    <td>551518541</td>
                                    <span class="p-2 mt-2 badge text-bg-success">Unblock</span>
                                    
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>mary@example.com</td>
                                    <td>551518541</td>
                                    <span class="p-2 mt-2 badge text-bg-success">Unblock</span>
                                    
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>july@example.com</td>
                                    <td>551518541</td>
                                    <span class="p-2 mt-2 badge text-bg-success">Unblock</span>
                                    
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Manage_user

