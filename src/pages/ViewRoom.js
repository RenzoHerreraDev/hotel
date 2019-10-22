import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Header from "../components/Header";


import { getRooms as getRoomsAction } from '../redux/actions'

class ViewRoom extends Component {

    componentDidMount(){
        const { getRooms }  = this.props ;
        getRooms()
    }
    render() {
        let id = this.props.match.params.slug  ;
        const {rooms} = this.props;

        
        if(rooms.length == 0  ){
                return (
                        <div className="error">
                            <h3>no se puede encontrar esa habitación...</h3>
                            <Link to='/rooms' className="btn-primary">
                            back to room
                            </Link>
                        </div>
                        );
        }
        else{
            const ids = Object.keys(rooms);
            const roomsThree = Object.values(rooms).slice(0, 3);
            for (var i = 0; i < roomsThree.length ; i++) {
                roomsThree[i].id = ids[i];
               
             }
            const room  =  roomsThree.filter( n => n.id == id)[0]
            return ( 
                     <>
                     <Layout>
                         <Header img={room.image}>
                             <Banner title={ `${room.name}` }></Banner> 
                         </Header>

                        <Section  room={room}/>
                     </Layout>
                    </>
            );

        }
        
   

    }
}

const mapStateToProps = (state ) => {

    return  {
        rooms:state.rooms,
         } 
 }
 
 const mapDispatchToProps ={
    getRooms: getRoomsAction
 };



export default connect( mapStateToProps ,  mapDispatchToProps )(ViewRoom);
