import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBacon, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
 
library.add(fab, faCheckSquare, faCoffee, faBacon, faAngleLeft, faAngleRight)


 

ReactDOM.render(<App />, document.getElementById('root'));

