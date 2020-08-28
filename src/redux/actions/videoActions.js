import Axios from 'axios';
import config from "../../config";

const { API_KEY, BASE_URL } = config;

export const fetchTrendingVideos = (pageToken = "") => {
  return async (dispatch) => {
    const { data } = await Axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet",
        maxResults: 30,
        key: API_KEY,
        chart: "mostPopular",
        pageToken
      }  
    });
    console.log(data);
    dispatch({ type: "SET_TRENDING_VIDEOS", payload: data });
  };
};