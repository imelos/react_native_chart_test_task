import React from 'react';
import {View} from 'react-native';
import DetailsListItem from './details-list-item';
import {Divider} from '@react-native-material/core';

export default function DetailsList(props) {
  return (
    <View>
      {props.data.map((item, index) => {
        return (
          //sorry for using index, this items are not going for reorder, so i can use it here.
          <View key={index}>
            {index !== 0 ? <Divider /> : null}
            <DetailsListItem data={item} />
          </View>
        );
      })}
    </View>
  );
}
