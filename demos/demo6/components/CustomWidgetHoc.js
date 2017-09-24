import * as React from 'react';

export const withCustomStyle = (WrappedComponent, size, widgetStyle) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return <WrappedComponent size={size} widgetStyle={widgetStyle} {...this.props} />;
    }
  };
};

export const withCustomClick = (WrappedComponent, func = () => {}) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
      func();
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

