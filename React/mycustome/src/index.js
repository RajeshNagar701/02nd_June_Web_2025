import React from 'react';
import ReactDOM from 'react-dom/client';

import Mycomponent from './Mycomponent';

const place = ReactDOM.createRoot(document.getElementById('maurya'));

place.render(
   <div>
	<h1 class="container p-5 bg-danger mt-5">Hi my First Custome React App</h1>
	<Mycomponent/>
   </div>	
);
