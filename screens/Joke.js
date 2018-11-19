import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Joke extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('category', 'Category selected jokes:')
  });

  constructor(props) {
    super(props);

    this.state = {
      joke: ''
    };
  }

  async componentDidMount() {
    const req = await fetch(`https://api.chucknorris.io/jokes/random?category=${this.props.navigation.getParam('category')}`);
    const joke = (await req.json()).value;
    console.log(joke);
    this.setState({ joke });
  }

  render() {
    return (
      <View>
        <Text style={styles.txt}>{this.state.joke}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txt: {
    color: 'black'
  }
});

