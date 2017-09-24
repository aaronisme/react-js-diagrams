import * as SRD from '../../../src/main';
import createCustomNodeModel from './CustomNodeModel';
import { CustomPortModel } from './CustomPortModel';


export class CustomNodeFactory extends SRD.AbstractInstanceFactory {
  constructor() {
    super('CustomNodeModel');
  }
  
  getInstance() {
    const CustomNodeModel = createCustomNodeModel('Diamond', 4);
    return new CustomNodeModel();
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
