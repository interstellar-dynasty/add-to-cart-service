import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsId: '',
      price: '',
      info: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    Axios.get('/api/getAll')
    .then(data => {
      this.setState({
        info: data
      });
  })
  .catch((err) => console.log('oh no there was an error in Axios request', err))
}

  handleClick(event) {
  let newQ = this.state.quantity + 1;
  event.preventDefault();
  this.setState({quantity: newQ });
} 
  render() {
    return (
      <div>
        <input type="button" value="Add to cart" onClick= {(e) => this.handleClick(e)} />
        <div>{this.state.info.product_Name} {this.state.info.price}</div>
      </div>
    );
  }
}
export default App;