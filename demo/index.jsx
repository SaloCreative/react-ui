'use strict';

import React from 'react';
import { render } from 'react-dom';

import Card from '../src/components/grid/card';

class Demo extends React.Component {

  render() {
    return (
      <Card>Lol</Card>
    );
  }

}

render(<Demo />, document.getElementById('demo'));
