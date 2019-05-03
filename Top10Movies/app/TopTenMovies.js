import { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import Top10Movies from './core-module/data/Info.json';
import MoviesList from './components/MoviesList';
import { Platform } from 'react-native';

// const store = createStore(rootReducer);


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });


class TopTenMovies extends Component {
    render() {
        return (
            <View>
                <MoviesList movies={Top10Movies} />
            </View>
        )
    }
}

export default Top10Movies;