import React from 'react';
import { configure, shallow } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Builder } from './Builder';
import Controls from '../../components/Burger/Controls';

configure({ adapter: new Adapter() });

describe('<Builder />', () => {
    let wrapper;

    beforeEach(() => {
        // let node = (<Builder initIngredient={() => {}} purchaseInit={() => {}}/>);
        // wrapper = shallow(node);
        wrapper = shallow(<Builder />, {disableLifecycleMethods: true});
    });

    it('should render <Controls /> when receiving ingredients', () => {
        wrapper.setProps({
            ingredients: {salad: 0}            
        });
        expect(wrapper.find(Controls)).toHaveLength(1);
    });
});