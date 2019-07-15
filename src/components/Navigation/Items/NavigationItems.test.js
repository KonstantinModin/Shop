import React from 'react';

import { configure, shallow } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import { NavLink } from 'react-router-dom';


configure({adapter: new Adapter()});

describe('<Navigation Items />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });
    
    it('should render 2 <Navigation Items /> elements if not authenticated', () => {       
        expect(wrapper.find(NavLink)).toHaveLength(2);
    });

    it('should render 3 <Navigation Items /> elements if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavLink)).toHaveLength(3);
    });
    
    it('should render 3 <Navigation Items /> elements if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavLink)).toHaveLength(3);
    });

});

// describe('<Navigation Items />', () => {
//     it('should render 2 <Navigation Items /> elements if not authenticated', () => {
//         const wrapper = shallow(<NavigationItems />);
//         expect(wrapper.find(NavLink)).toHaveLength(2);
//     });
//     it('should render 3 <Navigation Items /> elements if authenticated', () => {
//         const wrapper = shallow(<NavigationItems isAuth />);
//         expect(wrapper.find(NavLink)).toHaveLength(3);
//     });
// });