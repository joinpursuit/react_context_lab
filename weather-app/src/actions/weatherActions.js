import { SHOW_WEATHER } from './actionTypes'

export const showWeather = (city) => {
    return {
        type: SHOW_WEATHER,
        payload: city
    }
}

