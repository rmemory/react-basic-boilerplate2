import React from 'react';

import AppContext from './AppState.jsx';
import Loading from './Loading.jsx';

import { getDate } from '../utils/helpers';

const DayItem = () => (
	<AppContext.Consumer>
		{context => (
			<div>
				{context.state.isCurrentWeatherLoading
					&& <Loading text="Loading weather data" />
				}

				{!context.state.isCurrentWeatherLoading && context.state.currentWeather.weather
					&& (
						<div className="dayContainer">
							{/* <p>{JSON.stringify(context.state.currentWeather.weather[0], null, 2)}</p> */}
							<img className="weather" src={`/images/weather-icons/${context.state.currentWeather.weather[0].icon}.svg`} alt="Weather" />
							<h2 className="subheader">{getDate(context.state.currentWeather.dt)}</h2>
						</div>
					)
				}
			</div>
		)}
	</AppContext.Consumer>
);

export default DayItem;
