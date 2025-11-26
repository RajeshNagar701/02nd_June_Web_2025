

/*
What is React Router?
React Router is a library that provides routing capabilities for React applications.

Routing means handling navigation between different views.

React Router is the standard routing library for React applications. 
It enables you to:

Create multiple pages in your single-page application
Handle URL parameters and query strings
Manage browser history and navigation
Create nested routes and layouts
Implement protected routes for authentication
Without a router, your React application would be limited to a single page with no way to navigate between different views.

npm install react-router-dom


Basic Routing
React Router uses three main components for basic routing:

BrowserRouter, Routes, Route, Link , Navlink , Outlate

Link: Creates navigation links that update the URL =>  <a href="">
Routes: A container for all your route definitions
Route: Defines a mapping between a URL path and a component


The NavLink is especially useful for:  <navbar>

Navigation menus
Breadcrumbs
Tabs

*/


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AHome from './Pages/AHome'
import AHeader from './Component/AHeader'
import AFooter from './Component/AFooter'
import AAbout from './Pages/AAbout'
import AContact from './Pages/AContact'
import PNF from './Pages/PNF'

function App_route() {
  return (
    <div>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><AHeader/><AHome/><AFooter/></>}></Route>
                <Route path="/about" element={<><AHeader/><AAbout/><AFooter/></>}></Route>
                <Route path="/contact" element={<><AHeader/><AContact/><AFooter/></>}></Route>
                <Route path="*" element={<><PNF/></>}></Route>
            </Routes>
        </BrowserRouter>
     

    </div>
  )
}

export default App_route