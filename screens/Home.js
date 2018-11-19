import React, { Component, } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  async getCategories() {
    try {
      const req = await fetch('https://api.chucknorris.io/jokes/categories');
      const categories = (await req.json()).map(c => ({ key: c }));

      this.setState({ categories });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getCategories();
  }

  openJoke(key) {
    const { navigate } = this.props.navigation;
    navigate('Joke', { category: key });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Categories:</Text>
        {this.state.categories.map(c => 
          <View key={c.key} style={styles.cards}> 
            <Button style={styles.btn} title={c.key} onPress={() => this.openJoke(c.key)}/>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    flexDirection: 'row',
    width: '100%'
  },
  btn: {
    width: '100%'
  }
});

