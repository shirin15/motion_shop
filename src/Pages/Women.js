import React from 'react';
import {Route,Router,Link} from "react-router-dom";
import * as PropTypes from "prop-types";


function Routes(props) {
    return null;
}

Routes.propTypes = {children: PropTypes.node};
const Women = () => {
    return (
        <div>


            <ul>
                <li><Link to="shirt">футболки</Link></li>
            </ul>
          <Routes  >

              <Route path="shirt" element={<div><h1>Футболки </h1></div>}/>
              <Route path="trousers" element={<div><h1>Брюки </h1></div>}/>
              <Route path="kerchief" element={<div><h1>Платки </h1></div>}/>
              <Route path="accessories" element={<div><h1>Аксессуары </h1></div>}/>
              <Route path="cosmetics" element={<div><h1>Косметика </h1></div>}/>
          </Routes>
        </div>
    );
};

export default Women;