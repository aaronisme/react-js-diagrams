import * as SRD from '../../../src/main';
import * as _ from 'lodash';

export class CustomPortModel extends SRD.PortModel {
  constructor(pos = 'node-1') {
    super(pos);
    this.position = pos;
  }
  
  serialize() {
    return _.merge(super.serialize(), {
      position: this.position,
    });
  }
  
  deSerialize(data) {
    super.deSerialize(data);
    this.position = data.position;
  }
}
