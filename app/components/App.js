var React = require('react');
import Nav from './Nav.js';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;