import React, { Component } from 'react'
import { FaCocktail , FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
export default class Services extends Component {

    state = {
        services:[
                {
                    icon: <FaHiking />,
                    title: "Excursiones",
                    info:' Las excursiones mas divertidas '
                },
                {
                    icon: <FaCocktail />,
                    title: "Desayuno Gratis",
                    info:' Desayuno con muchas variedades'
                },
                {
                    icon: <FaShuttleVan />,
                    title: "Transporte gratuito",
                    info:' Transporte con aire acondicionado '
                },
                {
                    icon: <FaBeer />,
                    title: "Bar Incluido",
                    info:'Bar con mas de 100 variedades de tragos'
                }
                ]

    }
    render() {
        return (
            <section className="services">
                <div className='section-title'>
                    <h4>Servicios</h4>
                    <div />
                </div>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                            return( 
                            <article key={index}    className="service">
                                    <span> {item.icon}</span>
                                    <h6> {item.title}</h6>
                                    <p> {item.info}</p>
                            </article>
                            );
                    })}
                </div>
            </section>
        )
    }
}
