import React from 'react'
import {Link } from "react-router-dom";
 const Room = (item) =>{

    const {name, id , image , price } = item.item;

    return ( 
               
        <article className="room"> 
        <div className="img-container">
            <img src={image} alt="single room" />
            <div className="price-top">
                <h6>${price}</h6>
                <p> Por noche</p>
            </div>
            <Link to={ `/hotel/rooms/${id}`}  
            className="btn-primary room-link">
                Ver Más
            </Link>
        </div>       
        <p className="room-info">{name}</p>
        </article>
          
       );
     
}

export default Room;


