import React from 'react';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {LineChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(121, 121, 121, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
};

function Chart(props) {
  // const graphData = useContext(DataContext);
  const preparedGraphValues = props.data.reduce(
    (acc, cur) => {
      acc.labels.push(cur.date);
      acc.data.push(cur.value);
      return acc;
    },
    {labels: [], data: []},
  );
  const data = {
    labels: preparedGraphValues.labels,
    datasets: [
      {
        data: preparedGraphValues.data,
        color: (opacity = 1) => `rgba(121, 121, 121, ${opacity})`, // optional
        strokeWidth: 2, // optional,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      withVerticalLines={false}
    />
  );
}

export default Chart;
