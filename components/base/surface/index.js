import {StyleSheet} from 'react-native';
import React from 'react';
import {Surface} from '@react-native-material/core';
export default function BaseSurface({props, children}) {
  return (
    <Surface elevation={3} style={[styles.surface, {...props?.style}]}>
      {children}
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    borderRadius: 5,
    marginBottom: 10,
  },
});
