 import axios from 'axios';

 const requestHelper = axios.create({

    baseURL : 'http://localhost:4000'
 });

 export default { 
   
    rooms:{
       
        get: () => requestHelper({
            url:'rooms',
            method: 'get',
        }),
        create: data => requestHelper({
            url: 'rooms',
            method : 'post',
            data,
        })

    },
 }
