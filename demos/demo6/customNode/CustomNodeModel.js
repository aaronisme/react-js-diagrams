import * as SRD from '../../../src/main';
import { CustomPortModel } from './CustomPortModel';

class CustomNodeModel extends SRD.NodeModel {
  constructor(name, number) {
    super(name);
    for(let i=0; i < number; i++){
      this.addPort(new CustomPortModel(`node-${i +1}`));
    }
  }
}

export default CustomNodeModel;
