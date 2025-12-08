import React from 'react'
import AFooter from '../component/AFooter'
import AHaeder from '../component/AHaeder'

function Manage_product() {
    return (
        <div class="wrapper">
            <AHaeder />
            <div class="main-panel">
                <div class="content">
                    <div class="container-fluid">
                        <h4 class="page-title">Manage Product</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Product Name</th>
                                            <th>Product Image</th>
                                            <th className='text-centre'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Men</td>
                                            <td><img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" width="50px" alt="" /></td>
                                            <td className='text-centre'>
                                                <button className='btn btn-primary me-2'>Edit</button>
                                                <button className='btn btn-danger me-2'>Delete</button>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
                <AFooter />
            </div>
        </div>
    )
}

export default Manage_product