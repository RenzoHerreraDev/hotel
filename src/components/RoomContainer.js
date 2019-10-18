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
     
        return (
            <>   
               <RoomList rooms={rooms}/>
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

