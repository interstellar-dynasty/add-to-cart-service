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
      console.log(data, "this is the data we are looking for ")
      this.setState({
        info: data.data
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
        <div>{`${this.state.info.product_name}`} {`${this.state.info.price}`}</div>
      </div>
    );
  }
}
export default App;