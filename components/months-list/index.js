import React from 'react';
import {View} from 'react-native';
import MonthsListItem from './months-list-item';
import {Divider} from '@react-native-material/core';

export default function MonthsList(props) {
  return (
    <View>
      {props.data.map((item, index) => {
        return (
          <View key={item.id}>
            {index !== 0 ? <Divider /> : null}
            <MonthsListItem data={item} />
          </View>
        );
      })}
    </View>
  );
}
