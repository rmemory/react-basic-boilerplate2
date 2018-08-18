/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';

import AppContext from './AppState.jsx';
import DayItem from './DayItem.jsx';
import Loading from './Loading.jsx';

import { convertKelvinToFahrenheit } from '../utils/helpers';

const CurrentWeatherDetail = () => (
	<AppContext.Consumer>
		{context => (
			<div>
				{context.state.isCurrentWeatherLoading
					&& <Loading text="Loading weather data" />
				}

				{!context.state.isCurrentWeatherLoading && context.state.currentWeather.weather
					&& (
						<div>
							<div className="description-container">
								{/* <p>JSON.stringify(context.state, null, 2)</p> */}
								<p>Current weather in {context.state.currentWeather.name}:</p>
								<p>{context.state.currentWeather.weather[0].description}</p>
								<p>min temp: {convertKelvinToFahrenheit(context.state.currentWeather.main.temp_min)} degrees</p>
								<p>max temp: {convertKelvinToFahrenheit(context.state.currentWeather.main.temp_max)} degrees</p>
								<p>humidity: {context.state.currentWeather.main.humidity}%</p>
							</div>
							<DayItem />
						</div>
					)
				}
			</div>
		)}
	</AppContext.Consumer>
);

export default CurrentWeatherDetail;
