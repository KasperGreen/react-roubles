var React = require('react');
var ReactDOM = require('react-dom');
var Roubles = require('react-roubles');

var App = React.createClass({
	render () {
		return (
			<div>
				<Roubles>1000000</Roubles>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
