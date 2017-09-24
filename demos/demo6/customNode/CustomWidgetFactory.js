import * as React from 'react';
import * as SRD from '../../../src/main';

class CustomWidgetFactory extends SRD.NodeWidgetFactory {
  constructor(name, Component) {
    super(name);
    this.Component = Component;
  }
  
  generateReactWidget(diagramEngine, node) {
    const CustomNodeWidgetFactory = React.createFactory(this.Component);
    return CustomNodeWidgetFactory({ node })
  }
}

export default CustomWidgetFactory;

