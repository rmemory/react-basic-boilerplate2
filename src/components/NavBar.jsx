/* eslint-disable react/jsx-indent-props */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ZipCode from './ZipCode.jsx';

const NavBar = ({ history }) => (
	<Fragment>
		<div className="navbar">
			<h1>The Weather where you are ... or anywhere</h1>
			<ZipCode
				direction="row"
				onSubmitZipcode={(city) => {
					history.push({
						pathname: '/forecast',
						search: `?city=${city}`,
					});
				}}
			/>
		</div>
	</Fragment>
);

NavBar.propTypes = {
	history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default NavBar;
