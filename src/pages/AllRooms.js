import React from 'react'
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Header from "../components/Header";

import imgdef from "../images/defaultBcg.jpeg";


import RoomContainer from "../components/RoomContainer";


const AllRooms = () => {
    return (
    <> 
    <Layout>
      <Header img={imgdef}>
         <Banner title="Nuestras habitaciones"> </Banner>
     </Header >
     
     <RoomContainer></RoomContainer>

    </Layout>   

    </>
    );
};
export default AllRooms

