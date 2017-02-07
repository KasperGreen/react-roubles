import React from 'react';
import s from 'underscore.string'
class ReactHelloWorld extends React.Component {
	moneyFormat(num) {
		return s.numberFormat(num, 0, null, ' ') + ' ₽'
	}
	render() {
		const roubles= parseFloat(this.props.children);
		return (
			<span>
				{this.moneyFormat(roubles)}
			</span>
		)
	}
}
export default ReactHelloWorld;