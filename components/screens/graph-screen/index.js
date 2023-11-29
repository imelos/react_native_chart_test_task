import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {DataContext} from '../../data-provider';
import Surface from '../../base/surface';
import MonthsList from '../../months-list';
import Chart from '../../chart';

function GraphScreen() {
  const data = useContext(DataContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Surface>
          <Chart data={data} />
        </Surface>
        <Surface>
          <MonthsList data={data} />
        </Surface>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default GraphScreen;
