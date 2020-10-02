import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '../components/Autocomplete';
import { shallow, mount } from 'enzyme';

describe('test rendering', () => {
  it('renders without crashing', () => {
    const props = {
      isDark: true,
      suggestionStyle: {},
      inputStyle: {}
    };
    const div = document.createElement('div');
    ReactDOM.render(<Autocomplete {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders suggestions', () => {
    const props = { mockFn: jest.fn() };
    const wrapper = mount(<Autocomplete {...props} />);
    expect(wrapper.find('.search .suggestions')).toBeTruthy();
  });
});

describe('test functions', () => {
  it('test onChange of input', () => {
    const event = {
      currentTarget: { value: 'n' }
    };
    const wrapper = shallow(<Autocomplete />);
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('input').prop('value')).toEqual('n');
  });
});
