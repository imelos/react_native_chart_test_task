import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Text from '../../base/text';

export default function MonthsListItem({data}) {
  const navigation = useNavigation();
  const {value, monthName, date, details} = data;
  const navigate = () => {
    navigation.navigate('detailsScreen', {details});
  };

  return (
    <TouchableOpacity onPress={navigate} style={styles.container}>
      <View>
        <Text style={styles.monthName}>{monthName}</Text>
        <Text>{date}</Text>
      </View>
      <View>
        <Text>{value.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  monthName: {
    fontWeight: 'bold',
  },
});
