import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Women from "../Pages/Women";
import Men from "../Pages/Men";
import Children from "../Pages/Children";
import Shoes from "../Pages/Shoes";

const Hero = () => {
    return (

        <div>
            <nav className="catalog">

                <div className="women" ><Link to="/qw/Women">Женщинам</Link></div>

                <div className="women"><Link to="/qw/Men">Мужчинам</Link></div>

                <div className="women"><Link to="/qw/Children">Детям</Link></div>

                <div className="women"><Link to="/qw/Shoes">Обувь</Link></div>

            </nav>

            <Routes>

            </Routes>
        </div>


    );
};

export default Hero;