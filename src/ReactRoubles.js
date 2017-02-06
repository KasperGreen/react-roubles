import React, {Component} from 'react'
import s from 'underscore.string'

export default class MoneyFormat extends Component {
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