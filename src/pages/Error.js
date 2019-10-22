


import React from 'react'
import { Link} from "react-router-dom";

import Header from "../components/Header";
import Layout from "../components/Layout";
import imgdef from "../images/defaultBcg.jpeg";
import Banner from '../components/Banner';


const Error = () => {
        return (
                <Layout> 

                <Header img={imgdef} >
                        <Banner title="Error"    >
                        <Link   to="/hotel" class="btn-primary">Volver Inicio </Link >
                        </Banner>
              </Header>
                </Layout>
        )
    
}

export default Error
