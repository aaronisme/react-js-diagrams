import * as React from 'react';
import * as SRD from '../../../src/main';

const CircleWidget = ({ size = 100, color='blue', node }) => {
  return (
    <div className="circle-node" style={{position: 'relative', width: size, height: size}}>
      <svg width={size} height={size}>
        <g id="Layer_1"/>
        <g id="Layer_2">
          <circle fill={color}
                  cx={ size / 2 }
                  cy={ size / 2}
                  r ={ size / 2 - 1}
                   />
        </g>
      </svg>
      <div style={{position: 'absolute', zIndex: 10, top: size / 2, left:0}}>
        <SRD.PortWidget name={'node-1'} node={node}/>
      </div>
      <div style={{position: 'absolute', zIndex: 10, top: size /2, right:0}}>
        <SRD.PortWidget name={'node-2'} node={node}/>
      </div>
    </div>
  )
};

export default CircleWidget
