// import axios from 'axios';

// export const getPlacesData = async (type, sw, ne) => {

//     try {
//         const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//             params: {
//                 bl_latitude: sw.lat,
//                 tr_latitude: ne.lat,
//                 bl_longitude: sw.lng,
//                 tr_longitude: ne.lng,
//             },
//             headers: {
//                 'X-RapidAPI-Key': '821542c86dmshef3c50fb0235f2dp13506ejsn48bebaae9026',
//                 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//             },
//         });

//         return data;

//     } catch (error) {
//     //   console.log(error);

//     }
// }

import axios from 'axios';

export const getPlacesData = async(type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};