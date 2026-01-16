import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Manage_categories() {

    useEffect(() => {
        fetch_data();
    }, []);

    const [data, setData] = useState([]);
    /*
    const fetch_data=()=>{
      fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(obj =>  setData(obj)) 
    }
    */
    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/categories`);
        //console.log(obj);
        setData(obj.data)
    }

    const deleteHandel = async (id) => {
        const obj = await axios.delete(`http://localhost:3000/categories/${id}`);
        fetch_data();
        alert('delete success');
        return false;
    }

    //===================================================================

    const [edit_cate, setEdit_cate] = useState({
        id: "",
        name: "",
        image: ""
    });

    const editHandel = async (id) => {
        const obj = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(obj.data);
        setEdit_cate(obj.data);
        return false;
    }

    const changeHandel=(e)=>{
    setEdit_cate({...edit_cate,[e.target.name]:e.target.value});
    console.log(edit_cate);
 }

 const submitHandel = async (e) => {
        e.preventDefault();
        const obj = await axios.put(`http://localhost:3000/categories/${edit_cate.id}`,edit_cate);
        setEdit_cate({...edit_cate,name:"",image:""});
        alert('Categories Updated success');
        fetch_data();
        return false;
    }

    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Categories</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Cate Name</th>
                                    <th>Image</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index, arr) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td><img src={value.image} width="50px" alt="" /></td>
                                                <td className='text-center'>
                                                    <button className='btn btn-danger me-2' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value.id)}>Edit</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>

                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit Categories</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <form className="col-md-9 m-auto"  method="post" role="form">
                                            <div className="row">
                                                <div className="form-group col-md-12 mb-3">
                                                    <label htmlFor="inputemail">Name</label>
                                                    <input type="text" value={edit_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                                                </div>
                                                <div className="form-group col-md-12 mb-3">
                                                    <label htmlFor="inputemail">Enter Image URL</label>
                                                    <input type="url" value={edit_cate.image} onChange={changeHandel} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col text-end mt-2">
                                                    <button type="submit" className="btn btn-success btn-lg px-3" data-bs-dismiss="modal" onClick={submitHandel}>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_categories