import React, { useState, useEffect } from 'react';

const Card = ({data}) => {

    console.log(data)

    const mounths = {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",
    }
    
    const totalConso = () => {
        let consoTotal = 0;

        for (const entry of data.statements) {
            consoTotal += entry.value;
        }

        return consoTotal;
    }

    return (
        <li className="card-tenant">
            <div className="generals-infos">
                <h4 className="bold-infos">Apt.{data.apartment}</h4>
                <p>{data.family}</p>
            </div>
            <p>Voir Plus ></p>
            <ul>
                <div className="totals-infos">
                    <li>
                        <p><span className="bold-infos">{totalConso()}</span><br/>Total</p>
                    </li>
                    <li>
                        <p><span className="bold-infos">103</span><br/>Mois</p>
                    </li>
                </div>
                <li>
                    <p className="moyenne-info"><span className="bold-infos">7</span><br/>Moyenne</p>
                </li>
            </ul>
        </li>
    )
}

export default Card;