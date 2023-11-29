import React from 'react';
import {View} from 'react-native';
import DetailsListItem from './details-list-item';
import {Divider} from '@react-native-material/core';

export default function DetailsList(props) {
  console.log(props.data)
  console.log("data")
  return (
    <View>
      {props.data.map((item, index) => {
        return (
          <View key={item.id}>
            {index !== 0 ? <Divider /> : null}
            <DetailsListItem data={item} />
          </View>
        );
      })}
    </View>
  );
}
