import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="catalog">
            <div className="women"><Link to="/Women">Женщинам</Link></div>

            <div className="men"><Link to="/Men">Мужчинам</Link></div>

            <div className="children"><Link to="/Children">Детям</Link></div>

            <div className="shoes"><Link to="/Shoes">Обувь</Link></div>


        </div>
    );
};

export default Hero;