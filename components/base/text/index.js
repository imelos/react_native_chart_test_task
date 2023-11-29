import {Text} from 'react-native';

const BaseText = props => {
  return (
    <Text
      {...props}
      style={[
        {
          color: '#000',
        },
        {...props.style},
      ]}>
      {props.children}
    </Text>
  );
};
export default BaseText;
