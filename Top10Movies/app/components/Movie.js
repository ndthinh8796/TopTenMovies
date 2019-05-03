import { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';


export default class Movie extends Component {
  render() {
    return (
        <View style={styles.movie}>
          <View style={styles.movieTitleBorder}>
            <Text style={styles.movieTitle}>
              { this.props.title }
            </Text>
          </View>
          <View style={ styles.movieImageContainer }>
          <Image
            style={ styles.movieImage }
            source={{ uri: this.props.image }}
            initWidth= "400"
            initHeight= "300"
          />
          </View>
          <View style={ styles.movieButtonBorder }>
              <TouchableOpacity
                style={styles.movieButton}
                onPress={() => Linking.openURL(this.props.uri)}
              >
                <Text style={styles.movieButtonText}>More Info</Text>
              </TouchableOpacity>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  movie: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    marginBottom: 20,
    alignSelf: 'stretch',
    elevation: 2
  },
  movieTitleBorder: {
    borderBottomWidth: 2,
    borderColor: '#d6d7da',
  },
  movieTitle: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  movieImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  movieImage: {
    width: '95%',
    height: '95%',
  },
  movieButtonBorder: {
    borderTopWidth: 2,
    borderColor: '#d6d7da',
  },
  movieButton: {
    borderRadius: 4,
    borderWidth: 2,
    margin: 15,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#478dff",
    padding: 5
  },
  movieButtonText: {
    color: "#478dff",
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  }
});
