import React, { useState, useEffect } from 'react';

const Card = ({data}) => {



    return (
        <div className="card-tenant">
            {data.family}
            {data.apartment}
        </div>
    )
}

export default Card;