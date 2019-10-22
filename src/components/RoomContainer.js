import React, { Component } from 'react'
// Coneccion Api
import { connect } from 'react-redux';
import { getRooms as getRoomsAction } from '../redux/actions'

//Referencia a componentes
import RoomList from './RoomList';

class FeatureRooms extends Component{
    componentDidMount(){
        const {  getRooms} = this.props;
        getRooms();

    }
    render() {
        const {  rooms  } = this.props;


        const ids = Object.keys(rooms);
        const roomsArray = Object.values(rooms);

        for (var i = 0; i < roomsArray.length ; i++) {
            roomsArray[i].id = ids[i];
           
         }
        return (
            <>   
               <RoomList rooms={roomsArray}/>
           </>
        )
    }
}

const mapStateToProps = (state ) => {

    return  {
        rooms:state.rooms
         } 
 }
 
 const mapDispatchToProps ={
    getRooms: getRoomsAction
 };
export default connect( mapStateToProps ,mapDispatchToProps )(FeatureRooms);

