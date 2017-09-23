import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * Demo showing how to create a custom node widget
 *
 */
class Demo6 extends React.Component {
  
  render() {
    return (
      <div>This is the demo 6</div>
    )
  }
  
}

window.onload = () => {
  ReactDOM.render(<Demo6 />, document.getElementById('root'));
};
