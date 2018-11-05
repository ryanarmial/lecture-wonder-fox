import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Testing Component <App />', () => {
  const wrapper = shallow(<App />)
  const initTodos = wrapper.state('todos')
  it('Should rendered App', () => {
    expect(wrapper).toBeTruthy()
  })
  it('Should length state todos', () => {
    expect(initTodos).toHaveLength(1)
  })
  it('Should work addTodo', () => {
    wrapper.instance().addTodo('Bangun')
    const newTodo = wrapper.state('todos')
    expect(newTodo).toEqual(expect.arrayContaining(['Bangun']))
  })
  it('Should trigger addTodo', () => {
    wrapper.find('button').simulate('click', 'Pergi Sekolah')
    const newTodo = wrapper.state('todos')
    expect(newTodo).toEqual(expect.arrayContaining(['Pergi Sekolah']))
  })
  it('Should get person', () => {
    return wrapper.instance().getPerson().then(result => {
      expect(result).toHaveProperty('name')
    })
  })
  it('Should get state person async', () => {
    wrapper.update()
    const person = wrapper.state('person')
    expect(person).toHaveProperty('name')
  })
})
