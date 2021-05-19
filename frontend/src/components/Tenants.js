import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Card from './Card';

const Tenants = () => {

    const [datas, setDatas] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {
        if (playOnce) {
            axios
                .get('http://localhost:3000/datas')
                .then((res) => {

                    setDatas(res.data);
                    setPlayOnce(false);
                    console.log(datas);
                })
        }

    }, [datas, playOnce])

    return (
        <div className="tenants-list-wrapper">
            <p><span className="text-dark-theme">CONS</span>OMMATIONS</p>
            <ul>
                {
                    datas.map((data) => (
                        <Card data={data} key={data.apartment}/>
                    ))
                }
            </ul>
            <div className="art-points" id="art-point-home-1"></div>
            <div className="art-points" id="art-point-home-2"></div>
            <div className="art-points" id="art-point-home-3"></div>
            <div className="art-points" id="art-point-home-4"></div>
        </div>
    )
}

export default Tenants;