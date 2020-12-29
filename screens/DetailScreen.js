import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DetailScreen = props => {
  const item = props.navigation.getParam('item');

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.view}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{uri: item.picture.large}} />
          </View>
          <Text>{item.phone}</Text>
          <Text>{item.email}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

DetailScreen.navigationOptions = ({navigation}) => ({
  title: `${navigation.state.params.item.name.first +
    ' ' +
    navigation.state.params.item.name.last}`,
  headerBackTitle: 'Voltar',
});

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },

  imageView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
  },
});

export default DetailScreen;
