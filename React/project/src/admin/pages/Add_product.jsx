import React from 'react'
import AFooter from '../component/AFooter'
import AHaeder from '../component/AHaeder'

function Add_product() {
    return (
        <div class="wrapper">
            <AHaeder />
            <div class="main-panel">
                <div class="content">
                    <div class="container-fluid">
                        <h4 class="page-title">Add Product</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <form action="/action_page.php">
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="text">Product Name:</label>
                                        <input type="text" className="form-control" id="text" placeholder="Enter Categories Name" name="cate_name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="text">Product Image:</label>
                                        <input type="url" className="form-control" id="text" placeholder="Enter Categories Image URL" name="cate_img" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <AFooter />
            </div>
        </div>
    )
}

export default Add_product