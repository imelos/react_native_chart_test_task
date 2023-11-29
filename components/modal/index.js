import React from 'react';
import {View, Button, ActivityIndicator, StyleSheet} from 'react-native';
import Surface from '../base/surface';
import {WebView} from 'react-native-webview';

export default function Modal({navigation}) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.backdrop}>
      <Surface>
        <View style={styles.webViewContainer}>
          <WebView
            source={{uri: 'https://github.com/imelos'}}
            startInLoadingState={true}
            renderLoading={() => {
              return (
                <View style={styles.loadingIndicator}>
                  <ActivityIndicator />
                </View>
              );
            }}
          />
        </View>
        <Button onPress={goBack} title={'back'} />
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  loadingIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  webViewContainer: {
    width: 320,
    height: 240,
  },
});
