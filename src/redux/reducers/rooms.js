import { handleActions} from 'redux-actions';
import { getRoomsSuccess , createRoomsSuccess  } from '../actions';

 export default handleActions({

    [createRoomsSuccess]: (state , action ) => {
        return [...state, action.payload];

    },
    [getRoomsSuccess]: ( state, action ) => {
        return action.payload ;
    }
}, []);