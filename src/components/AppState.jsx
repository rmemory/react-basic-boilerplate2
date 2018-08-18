/* eslint-disable react/jsx-indent-props,
   react/no-access-state-in-setstate, react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// The context
const AppContext = React.createContext();

// State provider
class AppStateProvider extends Component {
	state = {
		greeting: '',
		errors: [],
		isCycling: false,
		isCurrentWeatherLoading: false,
		currentWeather: {},
		isWeatherForecastLoading: false,
		weatherForecast: {},
	}

	render() {
		/* The child element of a consumer must always be a function and it
		   must always only return a single element. */
		const { children } = this.props;
		const { errors, isCycling } = this.state;
		return (
			<AppContext.Provider
				value={{
					state: this.state,

					// State API
					setGreeting: greeting => this.setState({
						greeting,
					}),
					clearErrors: () => this.setState({
						errors: [],
					}),
					addErrors: newErrors => this.setState({
						errors: [...errors, ...newErrors],
					}),
					toggleCycling: () => this.setState({
						isCycling: !isCycling,
					}),
					setCurrentWeatherLoading: isCurrentWeatherLoading => this.setState({
						isCurrentWeatherLoading,
					}),
					setCurrentWeather: weather => this.setState({
						currentWeather: weather,
					}),
					setWeatherForecastLoading: isWeatherForecastLoading => this.setState({
						isWeatherForecastLoading,
					}),
					setWeatherForecast: forecast => this.setState({
						weatherForecast: forecast,
					}),
				}}
			>
				{ children }
			</AppContext.Provider>
		);
	}
}

AppStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default AppContext;
export { AppStateProvider };
