import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Footer extends Component {
	static propTypes = {};

	render() {
		return(
			<div className="footer-container">
				<div className="sections">
					<a href="/">iMESSAGE</a>&nbsp;2019
				</div>
			</div>
		);
	}
}
export default Footer;