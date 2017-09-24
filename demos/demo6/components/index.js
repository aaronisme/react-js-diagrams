import DiamondWidget from './DiamonWidget';
import CircleWidget from './CircleWidget';
import { withCustomStyle, withCustomClick } from './CustomWidgetHoc';

export const enhancedDiamondWidget = withCustomClick(withCustomStyle(DiamondWidget, 200, 'yellow'));
export const enhancedCircleWidget = withCustomClick(withCustomStyle(CircleWidget, 100, 'pink'));

