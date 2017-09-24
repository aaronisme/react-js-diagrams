import DiamondWidget from './DiamonWidget';
import CircleWidget from './CircleWidget';
import { withCustomStyle, withCustomClick } from './CustomWidgetHoc';

const diamondStyle = {
  color: 'yellow',
  stroke: '#000000',
  strokeWidth: 3,
  strokeMiterlimit: 10,
};

const circleStyle = {
  color: 'green',
};


export const enhancedDiamondWidget = withCustomClick(withCustomStyle(DiamondWidget, 200, diamondStyle));
export const enhancedCircleWidget = withCustomClick(withCustomStyle(CircleWidget, 100, circleStyle));

