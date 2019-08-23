import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import ProductHeader from '../ProductHeader';

 
describe('ProductHeader Component', () => {
 
  it('has an h2 tag', () => {
 
    const componente = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
    ReactTestUtils.findRenderedDOMComponentWithTag(componente, 'h2');
   
});
  it('has a title class', () => {
 
    const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
    ReactTestUtils.findRenderedDOMComponentWithClass(component, 'title');
  })
  
})

