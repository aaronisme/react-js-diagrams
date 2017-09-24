import * as React from 'react';
import * as SRD from '../../../src/main';


const createWidgetFactory = (Component, name) => {
  
  const CustomNodeWidgetFactory = React.createFactory(Component);
  
  return class CustomWidgetFactory extends SRD.NodeWidgetFactory {
    constructor(){
      super(name)
    }
  
    generateReactWidget(diagramEngine, node) {
      return CustomNodeWidgetFactory({ node })
    }
  }
};

export default createWidgetFactory;

