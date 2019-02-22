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
    this.handleClick = this.handleClick.bind(this);
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

//   handleClick(event) {
//   let newQ = this.state.quantity;
//   this.setState({ quantity: newQ + 1 });
//   event.preventDefault();
// } 

handleClick(event) {
  this.setState(quantity => {
     return {quantity: quantity.count + 1}
  })
}

  // handleDrop(event) {

  // }
  
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