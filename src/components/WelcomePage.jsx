/* eslint-disable react/jsx-one-expression-per-line, react/jsx-indent-props */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';

import AppContext from './AppState.jsx';
import NavBar from './NavBar.jsx';
import CurrentWeatherDetail from './CurrentWeatherDetail.jsx';
import Forecast from './Forecast.jsx';

import { getCurrentWeatherByLatLon } from '../utils/openweather_api.js';

const WelcomePage = () => (
	<AppContext.Consumer>
		{context => <BaseWelcomePage context={context} /> }
	</AppContext.Consumer>
);

class BaseWelcomePage extends Component {
	componentDidMount() {
		const { context } = this.props;
		const {
			setGreeting,
			setCurrentWeatherLoading,
			setCurrentWeather,
		} = context;

		setCurrentWeatherLoading(true);
		getCurrentWeatherByLatLon(/* null means get current location */)
			.then((response) => {
				console.log(response);
				if (response.errMsg === undefined) {
					setCurrentWeather(response.data);
					setGreeting(
						`Hello in ${response.data.name}!`,
					);
					setCurrentWeatherLoading(false);
				} else {
					// Todo
					setCurrentWeatherLoading(false);
				}
			});
	}

	render() {
		const { context } = this.props;
		const { greeting, currentWeather } = context.state;

		return (
			<BrowserRouter>
				<div className="container">
					<Route component={NavBar} />
					<Route
						exact
						path="/"
						render={() => (
							<Fragment>
								<div className="hello">
									{ greeting }
									{ greeting
										&& <p>(or hopefully somewhere close)</p>
									}
								</div>
								<CurrentWeatherDetail currentWeatherData={currentWeather} />
							</Fragment>
						)
						}
					/>
					<Route path="/forecast" component={Forecast} />

					<Route path="/details/:city" component={CurrentWeatherDetail} />
				</div>
			</BrowserRouter>
		);
	}
}

BaseWelcomePage.propTypes = {
	context: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default WelcomePage;
