import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getWeather from '../actions/getWeather'


const WeatherForm = () => {
	const [ weather, setWeather ] = useState('');
	const [ city, setCity ] = useState('')
	const [ viewState, setViewState ] = ('') 
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(
			getWeather({
				weather,
				loaded: true,
	
		})
	)
	setWeather('')


	}
    	return (
        	<form onSubmit={handleSubmit}>
		    	<input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" required/>
		    	<input type="text" value={viewState} onChange={e => setViewState(e.target.value)} placeholder="Enter state"/>
		    	<input type="submit"> What's the weather? </input>
		</form>
    )
}

export default WeatherForm