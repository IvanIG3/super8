import axios from 'axios';

const tmdb = async (endpoint, params) => {
    params['api_key'] = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    // Create api url call
    const urlparams = new URLSearchParams(params).toString();
    const call = `${process.env.tmdbURL}${endpoint}?${urlparams}`;
    // Do api call and return the result data
    const response = await axios.get(call);
    return response.data;
};

export default tmdb;