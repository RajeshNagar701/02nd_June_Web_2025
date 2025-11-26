import React from 'react'
import { NavLink } from 'react-router-dom'

function Shop() {
    return (
        <div>
            {/* Start Content */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <NavLink className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Gender
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                                </NavLink>
                                <ul className="collapse show list-unstyled pl-3">
                                    <li><NavLink className="text-decoration-none" href="#">Men</NavLink></li>
                                    <li><NavLink className="text-decoration-none" href="#">Women</NavLink></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <NavLink className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Sale
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                                </NavLink>
                                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                                    <li><NavLink className="text-decoration-none" href="#">Sport</NavLink></li>
                                    <li><NavLink className="text-decoration-none" href="#">Luxury</NavLink></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <NavLink className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Product
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                                </NavLink>
                                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                                    <li><NavLink className="text-decoration-none" href="#">Bag</NavLink></li>
                                    <li><NavLink className="text-decoration-none" href="#">Sweather</NavLink></li>
                                    <li><NavLink className="text-decoration-none" href="#">Sunglass</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <NavLink className="h3 text-dark text-decoration-none mr-3" href="#">All</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink className="h3 text-dark text-decoration-none mr-3" href="#">Men's</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink className="h3 text-dark text-decoration-none" href="#">Women's</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_01.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_02.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_03.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_04.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_05.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_06.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_07.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_08.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src="assets/img/shop_09.jpg" />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><NavLink className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></NavLink></li>
                                                <li><NavLink className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to="/shop_single" className="h3 text-decoration-none">Oupidatat non</NavLink>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <NavLink className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Content */}
            {/* Start Brands */}
            <section className="bg-light py-5">
                <div className="container my-4">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Our Brands</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="col-lg-9 m-auto tempaltemo-carousel">
                            <div className="row d-flex flex-row">
                                {/*Controls*/}
                                <div className="col-1 align-self-center">
                                    <NavLink className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                        <i className="text-light fas fa-chevron-left" />
                                    </NavLink>
                                </div>
                                {/*End Controls*/}
                                {/*Carousel Wrapper*/}
                                <div className="col">
                                    <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                        {/*Slides*/}
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            {/*First slide*/}
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink to="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink to="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink to="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End First slide*/}
                                            {/*Second slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Second slide*/}
                                            {/*Third slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <NavLink href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Third slide*/}
                                        </div>
                                        {/*End Slides*/}
                                    </div>
                                </div>
                                {/*End Carousel Wrapper*/}
                                {/*Controls*/}
                                <div className="col-1 align-self-center">
                                    <NavLink className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                        <i className="text-light fas fa-chevron-right" />
                                    </NavLink>
                                </div>
                                {/*End Controls*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Brands*/}
        </div>

    )
}

export default Shop