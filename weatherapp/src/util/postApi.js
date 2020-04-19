import axios from 'axios';

export const fetchCurrentWeather = () => axios.get("http://api.openweathermap.org/data/2.5/weather?q=london&appid=0b8db11fb3c103f5b31dab7a5343c2a9");
