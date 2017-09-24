import * as React from 'react';
import * as SRD from '../../../src/main';

const defaultStyle = {
  color: 'blue',
  stroke: '#000000',
  strokeWidth: 3,
  strokeMiterlimit: 10,
};


const DiamondWidget = ({ size = 150, style=defaultStyle, node }) => {
  return (
    <div className="diamond-node" style={{position: 'relative', width: size, height: size}}>
      <svg width={size} height={size}>
        <g id="Layer_1"/>
        <g id="Layer_2">
          <polygon fill={style.color} stroke={style.stroke} strokeWidth={style.strokeWidth} strokeMiterlimit={style.strokeMiterlimit}
                   points={`10,${size / 2} ${size / 2},10 ${size - 10},${size / 2} ${size / 2},${size - 10}`}/>
        </g>
      </svg>
      <div style={{position: 'absolute', zIndex: 10, top: size / 2 - 5}}>
        <SRD.PortWidget name={'node-1'} node={node}/>
      </div>
      <div style={{position: 'absolute', zIndex: 10, left: size / 2 - 8}}>
        <SRD.PortWidget name={'node-2'} node={node}/>
      </div>
      <div style={{position: 'absolute', zIndex: 10, left: size - 10, top: size / 2}}>
        <SRD.PortWidget name={'node-3'} node={node}/>
      </div>
      <div style={{position: 'absolute', zIndex: 10, left: size / 2 - 8, top: size - 10}}>
        <SRD.PortWidget name={'node-4'} node={node}/>
      </div>
    </div>
  )
};

export default DiamondWidget
