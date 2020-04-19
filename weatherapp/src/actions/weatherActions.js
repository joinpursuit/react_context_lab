import * as PostApi from "../util/postApi";
import { get_Weather } from './actionTypes';

const getWeather = (weather) => ({
  type: get_Weather, 
  payload: weather  
})

export const fetchAllPosts = () => async (dispatch) => {
    try {
        let res = await PostApi.fetchCurrentWeather(); 
        dispatch(getWeather(res.data));
    } catch (err) {
        console.log(err)

    }
}