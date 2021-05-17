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
        <div className="card-tenant">
            <div className="generals-infos">
                <h4>{data.apartment}</h4>
                <p>{data.family}</p>
            </div>
            <p>Voir Plus ></p>
            <ul>
                <div className="totals-infos">
                    <li>
                        <p>{totalConso()}<br/>Total</p>
                    </li>
                    <li>
                        <p>103<br/>Mois</p>
                    </li>
                </div>
                <li>
                    <p>7<br/>Moyenne</p>
                </li>
            </ul>


        </div>
    )
}

export default Card;