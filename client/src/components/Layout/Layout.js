import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default 
class Layout extends Component {
	static propTypes = {
		children:PropTypes.element
	};
	render() {
		return(
			<div className="category-container">
				{this.props.children}
			</div>
		);
	}
}
