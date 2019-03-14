import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import InputGroupAddon from '../src/index';


describe('Enzyme Shallow', function () {
  it('InputGroupAddon should be exist', function () {
    let inputGroupAddon = shallow(<InputGroupAddon/>);
    expect(inputGroupAddon.hasClass('u-input-group-addon')).to.equal(true);
  });
});