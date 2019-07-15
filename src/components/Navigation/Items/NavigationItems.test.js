import React from 'react';

import { configure, shallow } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import { NavLink } from 'react-router-dom';


configure({adapter: new Adapter()});

describe('<Navigation Items />', () => {
    it('should render 2 <Navigation Items /> elements if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavLink)).toHaveLength(2);
    });
});