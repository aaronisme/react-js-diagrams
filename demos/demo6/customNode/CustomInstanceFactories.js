import * as SRD from '../../../src/main';
import CustomNodeModel from './CustomNodeModel';
import { CustomPortModel } from './CustomPortModel';

export class CustomNodeFactory extends SRD.AbstractInstanceFactory {
  constructor(name, nodeNumber) {
    super('CustomNodeModel');
    this.name = name;
    this.nodeNumber = nodeNumber;
  }
  
  getInstance() {
    return new CustomNodeModel(this.name, this.nodeNumber);
  }
}

export class CustomPortFactory extends SRD.AbstractInstanceFactory {
  constructor() {
    super('CustomPortModel');
  }
  
  getInstance() {
    return new CustomPortModel();
  }
}
