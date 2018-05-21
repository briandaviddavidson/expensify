import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

test('see header tag in Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
})
