import React from 'react'
import { Link } from 'react-router-dom'


function AAbout() {
    return (
        <div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>About Me</h2>
                        <h5>Photo of me:</h5>
                        <div class="fakeimg">Fake Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        <h3 class="mt-4">Some Links</h3>
                        <p>Lorem ipsum dolor sit ame.</p>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default AAbout