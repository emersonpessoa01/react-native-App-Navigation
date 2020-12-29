import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ListItem from '../components/ListItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'react-native-app-navigation',
  };

  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?seed=fdm&results=100&nat=br')
      .then(res => res.json())
      .then(json => {
        this.setState({users: json.results});
      });
  }

  render() {
    const {users} = this.state;

    if (this.state.users.length === 0) {
      return <Text>Carregando...</Text>;
    }

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <FlatList
            style={styles.flatList}
            data={users}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => {
                  this.props.navigation.navigate('Detail', {item});
                }}>
                <ListItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.login.uuid}
          />
        </SafeAreaView>
      </>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'react-native-app-navigation',
};

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },

  touchableOpacity: {
    flex: 1,
  },
});
