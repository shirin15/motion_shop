import React from 'react';
import {Route, Link} from "react-router-dom";

import {Routes} from "react-router-dom"
import Trousers from "./Women/Trousers";
import Sort from "./Women/Sort";


const Women = () => {
    return (
        <div>
            <h1 className="w-36; min-h-45px; mx-32 text-3xl leading-10 font-bold mt-16 ml-16">Женщинам</h1>

            <ul className=" root flex items-center ">

                <li><Link to="Sort " className="font-normal leading-8 sort ml-6">Отсортировать по<svg className="mx-2" width="11" height="7" viewBox="0 0 11 7"    fill="none"      xmlns="http://www.w3.org/2000/svg"> <path d="M10.2458 0.290792C10.0584 0.104542 9.80498 0 9.5408 0C9.27661 0 9.02316 0.104542 8.8358 0.290792L5.2458 3.83079L1.7058 0.290792C1.51844 0.104542 1.26498 0 1.0008 0C0.736612 0 0.483161 0.104542 0.295798 0.290792C0.20207 0.383755 0.127675 0.494356 0.0769067 0.616216C0.026138 0.738075 0 0.868781 0 1.00079C0 1.1328 0.026138 1.26351 0.0769067 1.38537C0.127675 1.50723 0.20207 1.61783 0.295798 1.71079L4.5358 5.95079C4.62876 6.04452 4.73936 6.11891 4.86122 6.16968C4.98308 6.22045 5.11379 6.24659 5.2458 6.24659C5.37781 6.24659 5.50852 6.22045 5.63037 6.16968C5.75223 6.11891 5.86283 6.04452 5.9558 5.95079L10.2458 1.71079C10.3395 1.61783 10.4139 1.50723 10.4647 1.38537C10.5155 1.26351 10.5416 1.1328 10.5416 1.00079C10.5416 0.868781 10.5155 0.738075 10.4647 0.616216C10.4139 0.494356 10.3395 0.383755 10.2458 0.290792Z" fill="#343434"/></svg>   </Link></li>
                <li className="rootes"><Link to="Shirt">футболки</Link></li>
                <li className="rootes"><Link to="trousers">Брюки</Link></li>
                <li className="rootes"><Link to="Kerchief">Платки</Link></li>
                <li className="rootes"><Link to="Accessories">Аксессуары</Link></li>
                <li className="rootes"><Link to="Cosmetics">Косметика</Link></li>

            </ul>
            <Routes>
                <Route path="women/sort " element={<Sort/>}/>
                <Route path="women/shirt" element={<div className="text-2xl text-black"><h1>Футболки </h1></div>}/>
                <Route path="women/trousers" element={<Trousers/>}/>
                <Route path="women/kerchief" element={<div><h1>Платки </h1></div>}/>
                <Route path="women/accessories" element={<div><h1>Аксессуары </h1></div>}/>
                <Route path="women/cosmetics" element={<div><h1>Косметика </h1></div>}/>
            </Routes>
        </div>
    );
};

export default Women;