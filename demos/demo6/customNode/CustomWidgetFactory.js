import * as React from 'react';
import * as SRD from '../../../src/main';

class CustomWidgetFactory extends SRD.NodeWidgetFactory {
  constructor(name, Component) {
    super(name);
    this.reactComponent = Component;
  }
  
  generateReactWidget(diagramEngine, node) {
    const CustomNodeWidgetFactory = React.createFactory(this.reactComponent);
    return CustomNodeWidgetFactory({ node })
  }
}

export default CustomWidgetFactory;

