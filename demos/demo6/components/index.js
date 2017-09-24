import DiamondWidget from './DiamonWidget';
import CircleWidget from './CircleWidget';
import { withCustomStyle, withCustomClick } from './CustomWidgetHoc';

/**
 *
 * define the custom node widget presentational react component in the this folder
 * and define your custom behavior with an HOC and enhance the presentational component
 *
 */

const diamondStyle = {
  color: 'yellow',
  stroke: '#000000',
  strokeWidth: 3,
  strokeMiterlimit: 10,
};

const circleStyle = {
  color: 'green',
};


export const enhancedDiamondWidget =
  withCustomClick(
    withCustomStyle(DiamondWidget, 200, diamondStyle),
    () => console.log('this is the custom click on DiamondWidget')
  );

export const enhancedCircleWidget =
  withCustomClick(
    withCustomStyle(CircleWidget, 100, circleStyle),
    () => console.log('this is the custom click on CircleWidget')
  );

