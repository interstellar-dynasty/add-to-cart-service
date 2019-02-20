import React from 'react';
import ReactDOM from 'react-dom'

import Items from './Items';
import Cart from './Cart';
import Button from './Button';
import Quanity from './QuantityButton'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total:0,
    };

  }

  render() {
    return (
      <div>
        <Button />
      </div>
    )
  }
}
export default App;