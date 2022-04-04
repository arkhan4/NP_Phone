import React from 'react';
import './AppSquare.css';

class AppSquare extends React.Component {
    render() {
      return (
        <button className="button">
          {String(this.props.value).padStart(2, '0')}
        </button>
      );
    }
  }
  
  export default AppSquare;