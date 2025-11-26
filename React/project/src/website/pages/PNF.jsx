import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
    return (
        <div>
            <div>
                {/* Start Content Page */}
                <div className="container-fluid bg-light py-5">
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="h1">Page Not Found Us</h1>
                        <h3>404</h3>
                        <Link TO="/">Back To Home</Link>
                    </div>
                </div>
              
            </div>

        </div>

    )
}

export default PNF