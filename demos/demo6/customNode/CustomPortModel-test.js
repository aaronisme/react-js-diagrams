import expect from 'expect.js';
import sinon from 'sinon';
import * as SRD from '../../../src/main';
import {CustomPortModel} from './CustomPortModel';


describe('CustomPortModel', () => {
  let sandbox;
  let portModelSerializeStub;
  let portModelDeSerialize;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    portModelSerializeStub = sandbox.stub(SRD.PortModel.prototype, 'serialize').returns({});
    portModelDeSerialize = sandbox.stub(SRD.PortModel.prototype, 'deSerialize').returns({});
  });
  
  
  afterEach(function () {
    sandbox.restore();
  });
  
  it('should add position into the serialize result', () => {
    const modelInstance = new CustomPortModel();
    expect(modelInstance.serialize()).to.eql({position: 'node-1'});
  });
  
  it('should set model position when call deSerialize', () => {
    const modelInstance = new CustomPortModel();
    modelInstance.deSerialize({position: 'node-2'});
    modelInstance.deSerialize({position: 'node-2'});
    expect(modelInstance.position).to.be('node-2');
  });
});
