import React from 'react'

import './external.css';  // external css import


function Mycss() {
    const mystyle = { color: 'red', backgroundColor: 'yellow' }
    return (
        <div>

            <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hello i am Inline css</h1>

            <h1 style={mystyle}>Hello i am Internal css</h1>

            <h1 class="box1">External css</h1>

            <h1 class="box2">External css</h1>

           

        </div>
    )
}

export default Mycss