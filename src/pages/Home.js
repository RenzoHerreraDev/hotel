import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link} from "react-router-dom";

//Referencia a componentes
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Services from "../components/Services";
import FeatureRooms from "../components/FeatureRooms";
import Header from "../components/Header";
import imgdef from "../images/defaultBcg.jpeg";

class Home extends Component{
   
    render(){
        console.log(this.props)
        return(
            <Layout>
                   <Header img={imgdef}>
                        <Banner  title="Habitaciones lujosas"   subtitle="Habitaciones de lujo a partir de $2000 por noche">
                                <Link   to="/rooms" class="btn-primary">Ver todas </Link >
                        </Banner>
                      </Header>
                 <Services/>
                 <FeatureRooms/>
            </Layout >

        )
    }
}

const mapStateToProps = (state ) => {

   return  {
    
        } 
}

const mapDispatchToProps ={
 
};
export default connect( mapStateToProps ,mapDispatchToProps )(Home);

