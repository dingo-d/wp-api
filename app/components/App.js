var React = require('react');
var Navigation = require('./Navigation');

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;