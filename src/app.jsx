var React = require('react');

var App = React.createClass({

  getInitialState() {
    return {
      message: "Hello from state"
    }
  },
  render() {
    return <h1>{this.state.message}</h1>
  }
});


React.render(
    <App />,
    document.getElementById('example')
);

