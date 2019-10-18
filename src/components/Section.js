import React from 'react'


export default function Section( {room}) {
    return (
        <>
        <section className="single-room">
        
            <div className="single-room-info">
                <article className="desc">
                    <h3> Detalle</h3>
                    <p>{room.description}</p>
                </article>
                <article className="info">
                <h3> Informacion </h3>
                <h6>Precio por noche: ${room.price} </h6>
                <h6>Tamaño: {room.size} m²</h6>      
                <h6> Max capacidad: {""}
                    {room.capacity > 1  ? `${room.capacity} personas` : `${room.capacity} persona `}   
                </h6>                           
                <h6>{ room.pets ? " mascotas permitidas " : "no se admiten mascotas"}</h6>                           
                <h6> { room.breakfast && " desayuno gratis incluido"}</h6>
                </article>
            </div>
        </section>
 
      </>
    );
}
