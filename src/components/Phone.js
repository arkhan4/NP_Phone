import React from 'react';
import phoneimg from '../images/Phone2.png';
import AppSquare from './AppSquare';
import './Phone.css';

class Phone extends React.Component {
  renderAppSquare(i) {
    return <AppSquare value={i} />;  
  }

  render() {
    return (
      <div className="game-minimized">
        <img src={phoneimg} alt='Phone2' className="phone" />
        <div className="game-board">
          <div className="board-row">
            {this.renderAppSquare(0)}
            {this.renderAppSquare(1)}
            {this.renderAppSquare(2)}
            {this.renderAppSquare(3)}
          </div>
          <div className="board-row">
            {this.renderAppSquare(4)}
            {this.renderAppSquare(5)}
            {this.renderAppSquare(6)}
            {this.renderAppSquare(7)}
          </div>
          <div className="board-row">
            {this.renderAppSquare(8)}
            {this.renderAppSquare(9)}
            {this.renderAppSquare(10)}
            {this.renderAppSquare(11)}
          </div>
          <div className="board-row">
            {this.renderAppSquare(12)}
            {this.renderAppSquare(13)}
            {this.renderAppSquare(14)}
            {this.renderAppSquare(15)}
          </div>
          <div className="board-row">
            {this.renderAppSquare(16)}
            {this.renderAppSquare(17)}
            {this.renderAppSquare(18)}
            {this.renderAppSquare(19)}
          </div>
          <div className="board-row">
            {this.renderAppSquare(20)}
            {this.renderAppSquare(21)}
            {this.renderAppSquare(22)}
            {this.renderAppSquare(23)}
          </div>
        </div>
      </div>
    );
  } 
}

export default Phone;
    