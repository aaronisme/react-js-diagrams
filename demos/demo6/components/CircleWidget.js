import * as React from 'react';
import * as SRD from '../../../src/main';

const defaultStyle = {
  color: 'blue'
};

const CircleWidget = ({ size = 100, style = defaultStyle, node }) => {
  return (
    <div className="circle-node" style={{position: 'relative', width: size, height: size}}>
      <svg width={size} height={size}>
        <g id="Layer_1"/>
        <g id="Layer_2">
          <circle fill={style.color}
                  cx={ size / 2 }
                  cy={ size / 2}
                  r ={ size / 2 - 1}
                   />
        </g>
      </svg>
      <div style={{position: 'absolute', zIndex: 10, top: size / 2, left: -10 }}>
        <SRD.PortWidget name={'node-1'} node={node}/>
      </div>
      <div style={{position: 'absolute', zIndex: 10, top: size /2, right: -10 }}>
        <SRD.PortWidget name={'node-2'} node={node}/>
      </div>
    </div>
  )
};

export default CircleWidget
