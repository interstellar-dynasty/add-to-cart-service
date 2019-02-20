import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

let newQ = this.state.quantity + 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsId: '',
      price: '',
      data: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    Axios.get('/api/getAll')
    .then(res => {
      this.setState({data: res});
  })
}

  handleClick(event) {
  event.preventDefault();
  this.setState({quantity: newQ });
} 
  render() {
    return (
      <div>
        <input type="button" value="Add to cart" onClick={handleClick} />
        <div> `${this.state.data.product_Name}:_${this.state.data.price}`</div>
      </div>
    );
  }
}
export default App;

// import React from 'react';

// const Button = ({ onClick }) => {
//   return (
//     <input type="button" value="Add to cart" onClick={onClick} />
//   )
// }

// export default Button;