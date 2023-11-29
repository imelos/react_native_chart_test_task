import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Surface from '../../base/surface';
import {Divider} from '@react-native-material/core';
import DetailsList from '../../details-list';
import Text from '../../base/text';

function DetailsScreen({route, navigation}) {
  const {details} = route.params;
  const openModal = () => {
    navigation.navigate('modal');
  };
  return (
    <View style={styles.container}>
      <Surface>
        <DetailsList data={details} />
      </Surface>
      <Surface>
        <View style={styles.row}>
          <Text style={styles.measurementText}>Measurement Information</Text>
        </View>
        <Divider />
        <TouchableOpacity onPress={openModal}>
          <View style={styles.row}>
            <Text>ⓘ Understanding your measurements?</Text>
            <Text>{'>'}</Text>
          </View>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  measurementText: {
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
