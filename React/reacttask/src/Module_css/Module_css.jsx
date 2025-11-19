
/*
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.


Create the CSS module with the .module.css extension, example: my-style.module.css.
import : import A from './mycss1.module.css';


className={`${styles.mybutton} ${styles.primary}`}

*/


import React from 'react'
// normal css import
import './sty1.css';  
import './sty2.css';

// import MODULE.CSS 
import A from './msty1.module.css'
import B from './msty2.module.css'

function Module_css() {
  return (
    <div>
      <h1 className='bigblue'>Css 1</h1>
      <h1 className='bigblue'>Css 2</h1>

      <hr />

      <h1 className={A.smallblue}>Module Css 1</h1>
      <h1 className={B.smallblue}>Module Css 2</h1>

    </div>
  )
}

export default Module_css