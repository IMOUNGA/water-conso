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
            {
                datas.map((data) => (
                    <Card data={data} key={data.apartment}/>
                ))
            }
        </div>
    )
}

export default Tenants;