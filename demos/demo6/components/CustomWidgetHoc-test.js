import * as React from 'react';
import expect from 'expect.js';
import { withCustomStyle, withCustomClick } from './CustomWidgetHoc';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('CustomWidgetHOC', () => {
  
  const DummyComponent = () => <div>Dummy</div>;
  
  describe('withCustomStyle', () => {
    it('should passed in the style and size to the component props', () => {
      const View = withCustomStyle(DummyComponent, 100, {color:'red'})
      const wrapper = mount(<View />);
      const dummyComponent = wrapper.find(DummyComponent);
      expect(dummyComponent.prop('size')).to.be(100);
      expect(dummyComponent.prop('style')).to.eql({color:'red'})
    });
  });
  
  describe('withCustomClick', () => {
    it('should call passed function when component is clicked', () => {
      const clickSpy = sinon.spy();
      const View = withCustomClick(DummyComponent, clickSpy)
      const wrapper = mount(<View />);
      wrapper.simulate('click');
      expect(clickSpy.called).to.be(true);
    });
  });
});
