import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class Product extends React.Component {

    state = { count: 0 };

    incrementQty = () => {
        this.setState({
            count: this.state.count + 1
        }); 
        
        alert('Successfully added to cart');
      };

    decrementQty = () => {
        this.setState({
            count: this.state.count - 1
        }); 
      };

    render() {
        const { name, brand, price } = this.props.product

        return (
            <View style={{width: '48%', alignItems: 'center', borderWidth: 0.75,  marginHorizontal: '1%', padding: 15}}>
                    { <Image style={{width: 150, height: 150}} source={require('./assets/prod.jpg')}/> }
                    <Text>{name}</Text>
                    <Text>Brand: {brand}</Text>
                    <Text>Price: {price}</Text>
                    {this.state.count < 0? <Text>Purchased Quantity: {this.state.count = 0}</Text> : <Text>Purchased Quantity: {this.state.count}</Text>}
                <TouchableOpacity onPress={this.incrementQty}>
                    <Text style={{padding: 10, backgroundColor: '#dcdcdc', alignItems: 'center', margin: 10}}>Add 1 item to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.decrementQty}>
                    <Text style={{padding: 10, backgroundColor: '#dcdcdc', alignItems: 'center'}}>Remove 1 item from cart</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Product;
