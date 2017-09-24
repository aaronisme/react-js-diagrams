import * as React from 'react';
import * as SRD from '../../../src/main';

export  default class DiamondWidget extends React.Component {
  static defaultProps = {
    size: 150,
    node: null
  };
  
  render() {
    return (
      <div className="diamond-node" style={{position: 'relative', width: this.props.size, height: this.props.size}}>
        <svg width={this.props.size} height={this.props.size}>
          <g id="Layer_1"/>
          <g id="Layer_2">
            <polygon fill="cyan" stroke="#000000" strokeWidth="3" strokeMiterlimit="10"
                     points={`10,${this.props.size / 2} ${this.props.size / 2},10 ${this.props.size - 10},${this.props.size / 2} ${this.props.size / 2},${this.props.size - 10}`}/>
          </g>
        </svg>
        <div style={{position: 'absolute', zIndex: 10, top: this.props.size / 2 - 5}}>
          <SRD.PortWidget name={'node-1'} node={this.props.node}/>
        </div>
        <div style={{position: 'absolute', zIndex: 10, left: this.props.size / 2 - 8}}>
          <SRD.PortWidget name={'node-2'} node={this.props.node}/>
        </div>
        <div style={{position: 'absolute', zIndex: 10, left: this.props.size - 10, top: this.props.size / 2}}>
          <SRD.PortWidget name={'node-3'} node={this.props.node}/>
        </div>
        <div style={{position: 'absolute', zIndex: 10, left: this.props.size / 2 - 8, top: this.props.size - 10}}>
          <SRD.PortWidget name={'node-4'} node={this.props.node}/>
        </div>
      </div>
    )
  }
}
