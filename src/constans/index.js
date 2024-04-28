export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '40.776658',
        bl_lng: '27.936776',
        tr_lat: '41.679339',
        tr_lng: '30.037912',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key': '318749fdccmsh7930f51d31084a7p186193jsn2fb2918c9d65',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};
export const dOptions = {
    headers: {
        'X-RapidAPI-Key': '318749fdccmsh7930f51d31084a7p186193jsn2fb2918c9d65',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
}