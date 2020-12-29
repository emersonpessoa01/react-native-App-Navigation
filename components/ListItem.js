import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ListItem(props) {
  const {item} = props;

  const fullName = item.name.first + ' ' + item.name.last;

  return (
    <View style={styles.view}>
      <Image source={{uri: item.picture.large}} style={styles.image} />
      <Text>{fullName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
