import { createAction} from 'redux-actions';
import api from './api';

export const handleApiError = createAction('handleApiError'); 
export const createRoomsSuccess =createAction('createRoomsSuccess');
export const getRoomsSuccess = createAction('getRoomsSuccess');


export const createRooms = (data) => async (dispatch) =>{
    try{
        const  response = await api.rooms.create(data);
        dispatch (createRoomsSuccess(response.data));
    }
    catch (error){
        dispatch (handleApiError(error));
 }
}
export const getRooms = () => async (dispatch) =>{



        try{
            const  response = await api.rooms.get();
            dispatch (getRoomsSuccess(response.data));
        }
        catch (error){
            dispatch (handleApiError(error));
        }
 }

 
