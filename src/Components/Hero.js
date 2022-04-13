import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div
            className=""
            >
            <Link to="/Women">Женщинам</Link>
            <Link to="/Men">Мужчинам</Link>
            <Link to="/Children">Детям</Link>
            <Link to="/Shoes">Обувь</Link>
        </div>
    );
};

export default Hero;