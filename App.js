import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import Category from './components/Category';
import Searchdisplay from "./components/Searchdisplay"
import Booksdetail from './components/Booksdetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
         <Stack.Screen
          name="category"
          component={Category}
        />
         <Stack.Screen
          name="display"
          component={Searchdisplay}
        />
         <Stack.Screen
          name="details"
          component={Booksdetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;