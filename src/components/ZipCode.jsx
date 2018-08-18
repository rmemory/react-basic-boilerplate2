/* eslint-disable react/jsx-indent-props, react/jsx-one-expression-per-line,
   react/jsx-wrap-multilines, indent */
import React from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppState.jsx';

const ZipCode = ({ onSubmitZipcode, direction }) => (
	<AppContext.Consumer>
		{context => <BaseZipCode
						context={context}
						onSubmitZipcode={onSubmitZipcode}
						direction={direction}
		/>}
	</AppContext.Consumer>
);

ZipCode.defaultProps = {
	direction: 'column',
};

ZipCode.propTypes = {
	onSubmitZipcode: PropTypes.func.isRequired,
	direction: PropTypes.string,
};

class BaseZipCode extends React.Component {
	state = {
		zipcode: '',
	}

	handleSubmitZipcode = () => {
		const { zipcode } = this.state;
		const { onSubmitZipcode } = this.props;

		onSubmitZipcode(zipcode);

		this.setState({
			zipcode: '',
		});
	}

	handleUpdateZipcode = (e) => {
		const zip = e.target.value;
		this.setState({
			zipcode: zip,
		});
	}

	render() {
		const { context, direction } = this.props;
		return (
			<div
				className="zipcode-container"
				style={{ flexDirection: { direction } }}
			>
				<input
					className="form-control"
					onChange={this.handleUpdateZipcode}
					placeholder={context.state.currentWeather ? context.state.currentWeather.name : ''}
					type="text"
				/>
				<button
					type="button"
					style={{ margin: 10 }}
					className="btn btn-success"
					onClick={this.handleSubmitZipcode}
				>
					Get Weather
				</button>
			</div>
		);
	}
}

BaseZipCode.defaultProps = {
	direction: 'column',
};

BaseZipCode.propTypes = {
	context: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	onSubmitZipcode: PropTypes.func.isRequired,
	direction: PropTypes.string,
};

export default ZipCode;
