/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {DataProvider} from './data-provider';

import GraphScreen from './screens/graph-screen';
import DetailsScreen from './screens/details-screen';
import Modal from './modal';

const RootStack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App() {
  return (
    <DataProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#797979" barStyle="light-content" />
        <NavigationContainer theme={navTheme}>
          <RootStack.Navigator
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#797979',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}>
            <RootStack.Group>
              <RootStack.Screen
                name="graphScreen"
                component={GraphScreen}
                options={{title: 'My Fitness Score'}}
              />
              <RootStack.Screen
                name="detailsScreen"
                component={DetailsScreen}
                options={{title: 'Measurement Details'}}
              />
            </RootStack.Group>
            <RootStack.Group
              screenOptions={{
                presentation: 'transparentModal',
                animationEnabled: true,
                headerShown: false,
              }}>
              <RootStack.Screen name="modal" component={Modal} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DataProvider>
  );
}
export default App;
