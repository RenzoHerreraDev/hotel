import React from 'react';
import Room from './Room';
export default function RoomList({rooms}) {
 
   if( rooms.length === 0 ){
        return (

        <div className="empty-search">
            <h3>No hay habitacion disponibles</h3>

        </div>
        )

    }
    return ( 
            
            <section className="roomlist">
            <div className="roomslist-center">
                {
                rooms.map(item=> {

                    return <Room key={item.id} item={item} />
                })}
            </div>
            </section>
        );
}
