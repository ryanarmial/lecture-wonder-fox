import React from 'react';
import Home from './index';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Testing Async <Home/>', () => {
  const wrapper = shallow(<Home />)
  it('Should render <Home/>', () => {
    expect(wrapper).toBeTruthy()
  })
  it('Should Get Person', async () => {
    const person = await wrapper.instance().getPerson()
    expect(person).toHaveProperty('name')
  })
  // it('Should Get State Person', () => {
  //   wrapper.update()
  //   const person = wrapper.state('person')
  //   expect(person).toHaveProperty('name')
  // })
  it('Test Snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
