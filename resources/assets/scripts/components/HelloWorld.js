import React from 'react';
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "hello" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('handleClick'); 
    this.setState(() => ({text: "asdassad asd as"}));
  }
  render() {
    return (
      <div className="card" style={{width: 20 + 'rem'}}  onClick={this.handleClick}>
        <div className="card-block">
          <h4 className="card-title">React Component - {this.state.text}</h4>
          <p className="card-text">{"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
  
}

HelloWorld.propTypes = {
  name: PropTypes.string,
}

export default HelloWorld;