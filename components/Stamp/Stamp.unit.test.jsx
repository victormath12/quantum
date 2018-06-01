import React from 'react';
import renderer from 'react-test-renderer';
import Stamp from './Stamp';

describe('<Stamp />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Stamp text="example" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
