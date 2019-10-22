import React, { Component } from 'react'
import { connect } from 'react-redux';
import Room from "./Room";

import { getRooms as getRoomsAction } from '../redux/actions'

class FeatureRooms extends Component{
    componentDidMount(){
        const {  getRooms} = this.props;
        getRooms();
    }
    render() {
        const {rooms} = this.props;
        if(   rooms.length == 0  ){
            return ('')
        }
        else{
            const id = Object.keys(rooms);
            const roomsThree = Object.values(rooms).slice(0, 3);
        
            return (
                <section className="featured-rooms">
                        <div className='section-title'>
                            <h4>Habitacion destacadas</h4>
                            <div></div>
                        </div>
                        <div className="featured-rooms-center">
                          
                            {roomsThree.map((i, index) => {
                                i.id = id[index];
                                return  <Room  item={i } /> 
                            })} 
                        </div>
                </section>
            )
        }
       
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

