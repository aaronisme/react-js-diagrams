import CustomWidgetFactory from './CustomWidgetFactory';
import CustomNodeModel from './CustomNodeModel';
import { CustomNodeFactory, CustomPortFactory } from './CustomInstanceFactories';

export default class CustomNodeElement {
  constructor(name, Component, nodeNumber){
    this.name = name;
    this.reactComponent = Component;
    this.nodeNumber = nodeNumber;
  }
  
  getWidgetFactory(){
    return new CustomWidgetFactory(this.name, this.reactComponent);
  }
  
  getNodeModel(){
    return new CustomNodeModel(this.name, this.nodeNumber)
  }
  
  getPortFactory(){
    return new CustomPortFactory()
  }
  
  getNodeFactory(){
    return new CustomNodeFactory(this.name, this.nodeNumber)
  }
}
