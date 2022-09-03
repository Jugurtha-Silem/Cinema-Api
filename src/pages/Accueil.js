import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Card from '../components/card';

const Accueil = () => {

    const [dataMovis, setDataMovis] = useState([]);

    useEffect(() =>{
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=police&language=fr-FR").then((res) => setDataMovis(res.data.results));

    },[]);

    return (
        <div className='accueil'>
            <Navigation/>

            <div className="movis">  
                {
                    dataMovis.map((movis) => (< Card key={movis.id} movis={movis}/>))    
                }
            </div>
        </div>
    );
};

export default Accueil;