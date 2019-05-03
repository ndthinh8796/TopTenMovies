import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';


import Movie from './Movie';


export default class Movies extends Component {
  _renderItem = ({item}) => (
    <Movie
      title= {item.title}
      image= {item.image}
      uri = {item.url}
    />
    );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          Basic react native app
        </Text>
          <ScrollView>
            <Text style={styles.title}>Top Ten Movies On IMDB</Text>
            <View style={styles.album}>
            <FlatList
            data={ this.props.movies }
            renderItem={ this._renderItem }
            keyExtractor={(item, index) => index.toString()}
            />
            </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25
  },
   album: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  header: {
    backgroundColor: '#2051a0',
    padding: 12,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
