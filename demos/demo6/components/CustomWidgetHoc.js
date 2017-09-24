import * as React from 'react';

export const withCustomStyle = (WrappedComponent, size, color) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return <WrappedComponent size={size} color={color} {...this.props} />;
    }
  };
};

export const withCustomClick = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
      console.log('this is the custom click function')
    }
    
    render() {
      return (
        <div onClick={this.onClick}>
          <WrappedComponent {...this.props} />;
        </div>
      )
    }
  }
};

