import React from 'react';

class AppSquare extends React.Component {
    render() {
      return (
        <button className="btn">
          {String(this.props.value).padStart(2, '0')}
        </button>
      );
    }
  }
  
  export default AppSquare;