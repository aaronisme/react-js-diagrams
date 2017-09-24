import createWidgetFactory from './CustomWidgetFactory';
import createCustomNodeModel from './CustomNodeModel';
import { CustomNodeFactory, CustomPortFactory } from './CustomInstanceFactories';

const createCustomNodeBy = (Component, name) => {
  
  return {
    WidgetFactory: createWidgetFactory(Component, name),
    NodeModel: createCustomNodeModel(name, 4),
    NodeFactory: CustomNodeFactory,
    PortFactory: CustomPortFactory
  }
};

export default createCustomNodeBy
