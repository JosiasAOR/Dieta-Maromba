// In App.js in a new project

import * as React from 'react';
import { HomeScreen } from './Screens/Home';
import { Options } from './Screens/Options';
import { ConsumoDiario } from './Screens/ConsumoDiario';
import { CalcularTMB } from './Screens/AdicionarDieta';
import { MontarDieta } from './Screens/calculokcal';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Consumo Diario" component={ConsumoDiario} />
        <Stack.Screen name="Calcular Taxa Metabolica Basal" component={CalcularTMB} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Montar Dieta" component={MontarDieta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;