 import axios from 'axios';

 const requestHelper = axios.create({

    baseURL : 'https://hotel-e0fce.firebaseio.com'
 });

 export default { 
   
    rooms:{
        get: () => requestHelper({
            url:'rooms.json',
            method: 'get',
        }),
        create: data => requestHelper({
            url: 'rooms.json',
            method : 'post',
            data,
        })

    },
 }
