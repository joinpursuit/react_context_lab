import React from 'react'

const WeatherForm = () => {
    return (
        <form>
		    <input type="text" name="city" placeholder="City"/>
		    <input type="text" name="country" placeholder="State"/>
		    <button>What's the weather?</button>
	</form>
    )
}

export default WeatherForm