import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../base/text';

export default function DetailsListItem({data}) {
  const {value, title} = data;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{typeof value === 'number' ? value.toFixed(2) : value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});
