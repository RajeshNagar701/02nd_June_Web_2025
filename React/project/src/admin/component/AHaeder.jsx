import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function AHaeder() {
    return (
        <div>
            <div className="main-header">
                <div className="logo-header">
                    <a href="index.html" className="logo">
                        Ready Dashboard
                    </a>
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <button className="topbar-toggler more"><i className="la la-ellipsis-v" /></button>
                </div>
                <nav className="navbar navbar-header navbar-expand-lg">
                    <div className="container-fluid">
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false"> <img src="admin_assets/img/profile.jpg" alt="user-img" width={36} className="img-circle" /><span>Hizrian</span> </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li>
                                        <div className="user-box">
                                            <div className="u-img"><img src="admin_assets/img/profile.jpg" alt="user" /></div>
                                            <div className="u-text">
                                                <h4>Hizrian</h4>
                                                <p className="text-muted">hello@themekita.com</p><a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                        </div>
                                    </li>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#"><i className="ti-user" /> My Profile</a>
                                    <a className="dropdown-item" href="#"> My Balance</a>
                                    <a className="dropdown-item" href="#"><i className="ti-email" /> Inbox</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#"><i className="ti-settings" /> Account Setting</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#"><i className="fa fa-power-off" /> Logout</a>
                                </ul>
                                {/* /.dropdown-user */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="sidebar">
                <div className="scrollbar-inner sidebar-wrapper">
                    <div className="user">
                        <div className="photo">
                            <img src="admin_assets/img/profile.jpg" />
                        </div>
                        <div className="info">
                            <a className data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                <span>
                                    Hizrian
                                    <span className="user-level">Administrator</span>
                                    <span className="caret" />
                                </span>
                            </a>
                            <div className="clearfix" />
                            <div className="collapse in" id="collapseExample" aria-expanded="true" style={{}}>
                                <ul className="nav">
                                    <li>
                                        <a href="#profile">
                                            <span className="link-collapse">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#edit">
                                            <span className="link-collapse">Edit Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#settings">
                                            <span className="link-collapse">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/dashboard">
                                <i className="la la-dashboard" />
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="la la-dashboard" />
                                Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><NavLink class="dropdown-item" to="/add_categories">Add Categories</NavLink></li>
                                <li><NavLink class="dropdown-item" to="/manage_categories">Manage Categories</NavLink></li>
                            </ul>
                        </li>
                         <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="la la-dashboard" />
                                Product
                            </a>
                            <ul class="dropdown-menu">
                                <li><NavLink class="dropdown-item" to="/add_product">Add Product</NavLink></li>
                                <li><NavLink class="dropdown-item" to="/manage_product">Manage Product</NavLink></li>
                            </ul>
                        </li>
                         <li className="nav-item">
                            <NavLink to="/manage_contact">
                                <i className="la la-dashboard" />
                                <p>Contact</p>
                            </NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink to="/manage_cart">
                                <i className="la la-dashboard" />
                                <p>Cart</p>
                            </NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink to="/manage_customer">
                                <i className="la la-dashboard" />
                                <p>Customer</p>
                            </NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink to="/manage_feedback">
                                <i className="la la-dashboard" />
                                <p>Feedback</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default AHaeder